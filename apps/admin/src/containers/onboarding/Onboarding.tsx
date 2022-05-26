import React, { FC, useEffect } from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";

import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  CreateUserMutation,
  CREATE_USER,
  GetUserDataQuery,
  GET_USER_DATA,
  UpdateUserMutation,
  UPDATE_USER,
} from "./OnboardingData";
import { useAuth0 } from "@auth0/auth0-react";

interface OnboardingFormValues {
  name: string;
  description?: string;
  websiteUrl?: string;
  discordUrl?: string;
  twitterUrl?: string;
}

const InnerOnboardingForm: FC<FormikProps<OnboardingFormValues>> = ({
  errors,
  touched,
  values,
}) => (
  <Form>
    <div className="flex flex-col space-y-1">
      <InputGroup
        error={errors.name}
        label="Name"
        name="name"
        touched={touched.name}
        value={values.name}
      />

      <InputGroup
        as="textarea"
        error={errors.description}
        label="Tell us about you"
        name="description"
        touched={touched.description}
        value={values.description}
      />

      <InputGroup
        error={errors.websiteUrl}
        label="Website Url"
        name="websiteUrl"
        touched={touched.websiteUrl}
        value={values.websiteUrl}
      />

      <InputGroup
        error={errors.discordUrl}
        label="Discord Url"
        name="discordUrl"
        touched={touched.discordUrl}
        value={values.discordUrl}
      />

      <InputGroup
        error={errors.twitterUrl}
        label="Twitter Url"
        name="twitterUrl"
        touched={touched.twitterUrl}
        value={values.twitterUrl}
      />

      <PrimaryButton className="w-full" type="submit">
        Save
      </PrimaryButton>
    </div>
  </Form>
);

interface OnboardingFormProps {
  initialValues: OnboardingFormValues;
  onSubmit: (values: OnboardingFormValues) => void;
}

const OnboardingForm = withFormik<OnboardingFormProps, OnboardingFormValues>({
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
  mapPropsToValues: ({ initialValues }) => ({
    name: initialValues.name || "",
    description: initialValues.description || "",
    websiteUrl: initialValues.websiteUrl || "",
    discordUrl: initialValues.discordUrl || "",
    twitterUrl: initialValues.twitterUrl || "",
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required("Required"),
    description: yup.string().required("Required"),
    websiteUrl: yup.string(),
    discordUrl: yup.string(),
    twitterUrl: yup.string(),
  }),
})(InnerOnboardingForm);

export const OnboardingContainer: FC = () => {
  const { isLoading, user } = useAuth0();

  const [getUser, { data, loading, error }] =
    useLazyQuery<GetUserDataQuery>(GET_USER_DATA);

  const [
    createUser,
    { data: createUserData, loading: loadingCreateUserData, error: errorCreateUserData },
  ] = useMutation<CreateUserMutation>(CREATE_USER);

  const [
    updateUser,
    { data: updateUserData, loading: loadingUpdateUserData, error: errorUpdateUserData },
  ] = useMutation<UpdateUserMutation>(UPDATE_USER);

  useEffect(() => {
    if (user) {
      getUser({
        variables: {
          userId: user?.sub,
        },
      });
    }
  }, [user, getUser]);

  useEffect(() => {
    if (createUserData && user) {
      getUser({
        variables: {
          userId: user.sub,
        },
      });
    }
  }, [createUserData, user, getUser]);

  useEffect(() => {
    if (updateUserData && user) {
      getUser({
        variables: {
          userId: user?.sub,
        },
      });
    }
  }, [updateUserData, user, getUser]);

  if (isLoading || loading || loadingCreateUserData || loadingUpdateUserData) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}.</div>;
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
    if (data) {
      return {
        name: data.users_by_pk?.name || "",
        description: data.users_by_pk?.description || "",
        websiteUrl: data.users_by_pk?.websiteUrl || "",
        discordUrl: data.users_by_pk?.discordUrl || "",
        twitterUrl: data.users_by_pk?.twitterUrl || "",
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

  const handleOnSubmit = (values: OnboardingFormValues) => {
    if (data.users_by_pk) {
      updateUser({
        variables: {
          userId: data.users_by_pk.userId,
          email: user?.email,
          role: "user",
          ...values,
        },
      });
    } else {
      createUser({
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
    <div className="flex flex-1 flex-col w-full min-h-screen mx-auto">
      <div className="p-10 w-full max-w-3xl mx-auto border rounded-xl shadow-lg bg-white">
        <h3 className="text-center text-4xl font-semibold">Basic Information</h3>
        <div className="mt-12">
          <OnboardingForm initialValues={getInitialValues()} onSubmit={handleOnSubmit} />
        </div>
      </div>
    </div>
  );
};
