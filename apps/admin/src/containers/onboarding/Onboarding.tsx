import React, { FC, useEffect } from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";

import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER, GetUserDataQuery, GET_USER_DATA } from "./OnboardingData";
import { useAuth0 } from "@auth0/auth0-react";

interface OnboardingFormValues {
  name: string;
  description?: string;
  email: string;
  websiteUrl?: string;
  discordUrl?: string;
  twitterUrl?: string;
}

const InnerOnboardingForm: FC<FormikProps<OnboardingFormValues>> = ({
  errors,
  touched,
}) => (
  <Form>
    <div className="flex flex-col space-y-1">
      <InputGroup error={errors.name} label="Name" name="name" touched={touched.name} />

      <InputGroup
        as="textarea"
        error={errors.description}
        label="Tell us about you"
        name="description"
        touched={touched.description}
      />

      <InputGroup
        error={errors.websiteUrl}
        label="Website Url"
        name="websiteUrl"
        touched={touched.websiteUrl}
      />

      <InputGroup
        error={errors.discordUrl}
        label="Discord Url"
        name="discordUrl"
        touched={touched.discordUrl}
      />

      <InputGroup
        error={errors.twitterUrl}
        label="Twitter Url"
        name="twitterUrl"
        touched={touched.twitterUrl}
      />

      <PrimaryButton className="w-full" type="submit">
        Save
      </PrimaryButton>
    </div>
  </Form>
);

interface OnboardingFormProps {
  initialValues: OnboardingFormValues;
  onSubmit: () => void;
}

const OnboardingForm = withFormik<OnboardingFormProps, OnboardingFormValues>({
  handleSubmit: (values, { props }) => {
    console.log(values, props);
  },
  mapPropsToValues: ({ initialValues }) => ({
    name: initialValues.name || "",
    email: initialValues.email || "",
    description: initialValues.description || "",
    websiteUrl: initialValues.websiteUrl || "",
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    description: yup.string().required("Required"),
    websiteUrl: yup.string(),
    discordUrl: yup.string(),
    twitterUrl: yup.string(),
  }),
})(InnerOnboardingForm);

export const OnboardingContainer: FC = () => {
  const { isLoading, user } = useAuth0();
  const { data, loading, error } = useQuery<GetUserDataQuery>(GET_USER_DATA);

  const [createUser, { loading: loadingUserData, error: errorUserData }] = useMutation(
    CREATE_USER,
    {
      refetchQueries: [{ query: GET_USER_DATA }],
    }
  );

  if (isLoading || loading || loadingUserData) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}.</div>;
  }

  if (errorUserData) {
    return <div>{errorUserData.message}.</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const getInitialValues = (): OnboardingFormValues => {
    if (data) {
      const currentUser = data.users.find((u) => u.userId === user?.sub);
      return {
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        description: currentUser?.description || "",
        websiteUrl: currentUser?.websiteUrl || "",
        discordUrl: currentUser?.discordUrl || "",
        twitterUrl: currentUser?.twitterUrl || "",
      };
    }

    return {
      name: "",
      email: "",
      description: "",
      websiteUrl: "",
      discordUrl: "",
      twitterUrl: "",
    };
  };

  const handleOnSubmit = () => {
    createUser({
      variables: {},
    });
  };

  return (
    <div className="flex flex-1 flex-col w-full max-w-xl min-h-screen mx-auto">
      <h3 className="text-center text-4xl font-semibold">Your Profile</h3>
      <div className="mt-12">
        <OnboardingForm initialValues={getInitialValues()} onSubmit={handleOnSubmit} />
      </div>
    </div>
  );
};
