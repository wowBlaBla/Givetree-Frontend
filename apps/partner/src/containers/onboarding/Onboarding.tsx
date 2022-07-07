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
            email: user?.email ?? "",
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
    initialFormValues.email = user?.email ?? "";
  }

  const handleOnSubmit = (values: OnboardingFormValues) => {
    if (data?.users_by_pk) {
      updateUser({
        variables: {
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
      {isCreateUserLoading && <LoadingContainer message="Saving partner details..." />}
      {isUpdateUserLoading && <LoadingContainer message="Updating partner details..." />}

      <div className="w-full max-w-4xl p-10 mx-auto bg-white border shadow-lg rounded-xl">
        {(isAuthLoading || isGetUserLoading) && <SkeletonOnboardingForm />}

        {data && (
          <div>
            <h3 className="text-4xl font-semibold text-center">Basic Information</h3>
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
