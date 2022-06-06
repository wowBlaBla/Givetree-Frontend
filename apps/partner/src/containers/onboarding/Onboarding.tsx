import React, { FC, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { getDefaultFormValues, getFormValues } from "./Onboarding.utils";
import { OnboardingForm } from "./onboarding-form/OnboardingForm";
import { OnboardingFormValues } from "./onboarding-form/OnboardingForm.types";
import { SkeletonOnboardingForm } from "./onboarding-form/SkeletonOnboardingForm";
import { AppContainer } from "../../components/AppContainer";
import { ErrorContainer } from "../../components/ErrorContainer";
import { LoadingContainer } from "../../components/LoadingContainer";
import {
  useGetUserDetailsLazyQuery,
  useCreateUserDetailsMutation,
  useUpdateUserDetailsMutation,
} from "../../typed/index";

export const OnboardingContainer: FC = () => {
  const { isLoading: isAuthLoading, user } = useAuth0();

  const [getUser, { data, loading: isGetUserLoading, error }] =
    useGetUserDetailsLazyQuery({
      fetchPolicy: "no-cache",
    });

  const [createUser, { loading: isCreateUserLoading, error: createUserError }] =
    useCreateUserDetailsMutation({
      onError: () => {
        toast.warning("Unable to save details");
      },
      onCompleted: () => {
        toast.success("Details have been saved");
      },
    });

  const [updateUser, { loading: isUpdateUserLoading, error: updateUserError }] =
    useUpdateUserDetailsMutation({
      onError: () => {
        toast.warning("Unable to save details");
      },
      onCompleted: () => {
        toast.success("Details have been updated");
      },
    });

  useEffect(() => {
    if (user) {
      const getValues = async () => {
        await getUser({
          variables: {
            userId: user?.sub ?? "",
          },
        });
      };

      getValues();
    }
  }, [user]);

  if (error) {
    return <ErrorContainer text={error.message} />;
  }

  if (createUserError) {
    return <ErrorContainer text={createUserError.message} />;
  }
  if (updateUserError) {
    return <ErrorContainer text={updateUserError.message} />;
  }

  let initialFormValues: OnboardingFormValues = getDefaultFormValues();

  if (data) {
    initialFormValues = getFormValues(data);
  }

  const handleOnSubmit = (values: OnboardingFormValues) => {
    if (data?.users_by_pk) {
      updateUser({
        variables: {
          userId: user?.sub || "",
          ...values,
        },
      });
    } else {
      createUser({
        variables: {
          userId: user?.sub || "",
          role: "user",
          ...values,
        },
      });
    }
  };

  return (
    <AppContainer isLoading={isCreateUserLoading || isUpdateUserLoading}>
      {isCreateUserLoading && <LoadingContainer text="Saving partner details..." />}
      {isUpdateUserLoading && <LoadingContainer text="Updating partner details..." />}

      <div className="p-10 w-full max-w-4xl mx-auto border rounded-xl shadow-lg bg-white">
        {(isAuthLoading || isGetUserLoading) && <SkeletonOnboardingForm />}

        {data && (
          <div>
            <h3 className="text-center text-4xl font-semibold">Basic Information</h3>
            <div className="mt-8">
              <OnboardingForm
                initialValues={initialFormValues}
                onSubmit={handleOnSubmit}
              />
            </div>
          </div>
        )}
      </div>
    </AppContainer>
  );
};
