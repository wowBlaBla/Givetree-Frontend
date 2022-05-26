import React, { FC, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import {
  CreateUserDataMutation,
  CREATE_USER_DATA_MUTATION,
  GetUserDataQuery,
  GET_USER_DATA_QUERY,
  UpdateUserDataMutation,
  UPDATE_USER_DATA_MUTATION,
} from "./OnboardingData";
import { OnboardingForm, OnboardingFormValues } from "./OnboardingForm";
import { GiveTreeLogo } from "../../components/GiveTreeLogo";

export const OnboardingContainer: FC = () => {
  const { isLoading, user } = useAuth0();

  const [getUser, { data, loading, error }] =
    useLazyQuery<GetUserDataQuery>(GET_USER_DATA_QUERY);

  const [
    createUser,
    { data: createUserData, loading: loadingCreateUserData, error: errorCreateUserData },
  ] = useMutation<CreateUserDataMutation>(CREATE_USER_DATA_MUTATION);

  const [
    updateUser,
    { data: updateUserData, loading: loadingUpdateUserData, error: errorUpdateUserData },
  ] = useMutation<UpdateUserDataMutation>(UPDATE_USER_DATA_MUTATION);

  useEffect(() => {
    if (!isLoading && user) {
      getUser({
        variables: {
          userId: user?.sub,
        },
      });
    }
  }, [isLoading, user, getUser]);

  if (isLoading || loading || loadingCreateUserData || loadingUpdateUserData) {
    return (
      <div className="flex flex-1 flex-col w-full mx-auto space-x-3">
        <div className="flex flex-1 justify-center items-center w-full space-x-3">
          <GiveTreeLogo className="w-12 h-12 animate-pulse" />
          <h3 className="text-gray-600 font-semibold">Loading...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-1 flex-col w-full mx-auto space-x-3">
        <div className="flex flex-1 justify-center items-center w-full space-x-3">
          <h3 className="text-gray-600 font-semibold">{error.message}</h3>
        </div>
      </div>
    );
  }

  if (errorCreateUserData) {
    return <div>{errorCreateUserData.message}.</div>;
  }

  if (errorUpdateUserData) {
    return <div>{errorUpdateUserData.message}.</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const getInitialValues = (): OnboardingFormValues => {
    const currentUser = () => {
      if (updateUserData) return updateUserData.update_users_by_pk;
      if (data) return data.users_by_pk;
      if (createUserData) return createUserData.insert_users_one;
      return undefined;
    };

    if (currentUser()) {
      return {
        name: currentUser()?.name || "",
        description: currentUser()?.description || "",
        websiteUrl: currentUser()?.websiteUrl || "",
        discordUrl: currentUser()?.discordUrl || "",
        twitterUrl: currentUser()?.twitterUrl || "",
      };
    }

    return {
      name: "",
      description: "",
      websiteUrl: "",
      discordUrl: "",
      twitterUrl: "",
    };
  };

  const handleOnSubmit = async (values: OnboardingFormValues) => {
    if (data.users_by_pk) {
      await updateUser({
        variables: {
          userId: data.users_by_pk.userId,
          email: user?.email,
          ...values,
        },
      });
    } else {
      await createUser({
        variables: {
          userId: user?.sub,
          email: user?.email,
          role: "user",
          ...values,
        },
      });
    }
  };

  return (
    <div className="flex flex-1 flex-col w-full min-h-full mx-auto">
      <div className="p-10 w-full max-w-3xl mx-auto border rounded-xl shadow-lg bg-white">
        <h3 className="text-center text-4xl font-semibold">Basic Information</h3>
        <div className="mt-12">
          <OnboardingForm initialValues={getInitialValues()} onSubmit={handleOnSubmit} />
        </div>
      </div>
    </div>
  );
};
