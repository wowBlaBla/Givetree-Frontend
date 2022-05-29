import React, { FC, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useGetUserLazyQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../../typed/index";
import { OnboardingForm, OnboardingFormValues } from "./OnboardingForm";
import { LoadingScreen } from "../../components/LoadingScreen";
import { AppContainer } from "../../components/AppContainer";
import { ErrorScreen } from "../../components/ErrorScreen";
import { toast } from "react-toastify";

export const OnboardingContainer: FC = () => {
  const { isLoading, user } = useAuth0();

  const [getUser, { data, loading, error }] = useGetUserLazyQuery({
    fetchPolicy: "no-cache",
  });

  const [
    createUser,
    { data: createUserData, loading: createUserLoading, error: createUserError },
  ] = useCreateUserMutation();

  const [
    updateUser,
    { data: updateUserData, loading: updateUserLoading, error: updateUserError },
  ] = useUpdateUserMutation();

  useEffect(() => {
    if (!isLoading && user) {
      const getValues = async () => {
        await getUser({
          variables: {
            userId: user?.sub ?? "",
          },
        });
      };

      getValues();
    }
  }, [isLoading, user, getUser]);

  useEffect(() => {
    if (createUserData) {
      toast.success("Partner information has been saved");
    }
  }, [createUserData]);

  useEffect(() => {
    if (updateUserData) {
      toast.success("Changes have been updated");
    }
  }, [updateUserData]);

  const containerIsLoadig =
    isLoading || loading || createUserLoading || updateUserLoading;

  if (containerIsLoadig) {
    return <LoadingScreen text="Loading partner information..." />;
  }

  if (error) {
    return <ErrorScreen text={error.message} />;
  }

  if (createUserError) {
    return <ErrorScreen text={createUserError.message} />;
  }

  if (updateUserError) {
    return <ErrorScreen text={updateUserError.message} />;
  }

  if (!data) {
    return <ErrorScreen text="Partner information not found." />;
  }

  const getUserValues = () => {
    if (updateUserData) return updateUserData.update_users_by_pk;
    if (createUserData) return createUserData?.insert_users_one;
    if (data) return data.users_by_pk;
    return undefined;
  };

  const getInitialValues = (): OnboardingFormValues => {
    const currentUser = getUserValues();

    if (currentUser) {
      return {
        aliasName: currentUser.aliasName || "",
        contactNumber: currentUser.contactNumber || "",
        country: currentUser.country || "",
        cryptoActivityRating: currentUser.cryptoActivityRating || 1,
        cryptoConfidenceRating: currentUser.cryptoConfidenceRating || 1,
        cryptoExperienceRating: currentUser.cryptoExperienceRating || 1,
        cryptoOffRampStrategy: currentUser.cryptoOffRampStrategy || "",
        description: currentUser.description || "",
        discordUrl: currentUser.discordUrl || "",
        email: currentUser.email || "",
        ethWalletAddress: currentUser.ethWalletAddress || "",
        expectedReleaseDate: currentUser.expectedReleaseDate || null,
        firstName: currentUser.firstName || "",
        isArtworkReady: currentUser.isArtworkReady || false,
        lastName: currentUser.lastName || "",
        logoUrl: currentUser.logoUrl || "",
        solWalletAddress: currentUser.solWalletAddress || "",
        twitterUrl: currentUser.twitterUrl || "",
        userType: currentUser.userType || "",
        websiteUrl: currentUser.websiteUrl || "",
      };
    }

    return {
      aliasName: "",
      contactNumber: "",
      country: "",
      cryptoActivityRating: 1,
      cryptoConfidenceRating: 1,
      cryptoExperienceRating: 1,
      cryptoOffRampStrategy: "",
      description: "",
      discordUrl: "",
      email: "",
      ethWalletAddress: "",
      expectedReleaseDate: null,
      firstName: "",
      isArtworkReady: false,
      lastName: "",
      logoUrl: "",
      solWalletAddress: "",
      twitterUrl: "",
      userType: "",
      websiteUrl: "",
    };
  };

  const handleOnSubmit = (values: OnboardingFormValues) => {
    if (data.users_by_pk) {
      updateUser({
        variables: {
          userId: data.users_by_pk.userId,
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
    <AppContainer>
      <div className="p-10 w-full max-w-4xl mx-auto border rounded-xl shadow-lg bg-white">
        <h3 className="text-center text-4xl font-semibold">Basic Information</h3>
        <div className="mt-12">
          {!containerIsLoadig && (
            <OnboardingForm
              initialValues={getInitialValues()}
              onSubmit={handleOnSubmit}
            />
          )}
        </div>
      </div>
    </AppContainer>
  );
};
