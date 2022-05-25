import React, { FC } from "react";
// import cx from "classnames";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";

import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useAuth0 } from "@auth0/auth0-react";

interface OnboardingFormValues {
  name: string;
  description?: string;
  email: string;
  websiteUrl?: string;
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

      <PrimaryButton className="w-full" type="submit">
        Save
      </PrimaryButton>
    </div>
  </Form>
);

interface OnboardingFormProps {
  name?: string;
  email?: string;
  description?: string;
  websiteUrl?: string;
}

const OnboardingForm = withFormik<OnboardingFormProps, OnboardingFormValues>({
  handleSubmit: (values, { props }) => {
    console.log(values, props);
  },
  mapPropsToValues: ({ name, email, description, websiteUrl }) => ({
    name: name || "",
    email: email || "",
    description: description || "",
    websiteUrl: websiteUrl || "",
  }),
  validationSchema: yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    description: yup.string().required("Required"),
    websiteUrl: yup.string(),
  }),
})(InnerOnboardingForm);

export const OnboardingContainer: FC = () => {
  const { isLoading, user } = useAuth0();

  if (!isLoading) {
    console.log(user);
  }

  return (
    <div className="flex flex-1 flex-col w-full max-w-xl min-h-screen mx-auto">
      <h3 className="text-center text-4xl font-semibold">Your Profile</h3>
      <div className="mt-12">
        <OnboardingForm />
      </div>
    </div>
  );
};
