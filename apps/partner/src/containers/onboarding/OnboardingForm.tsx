import React, { FC } from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";
import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";

export interface OnboardingFormValues {
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
  <Form className="flex flex-col space-y-1">
    <InputGroup
      error={errors.name}
      label="What is your artist or organisation name?"
      name="name"
      touched={touched.name}
      value={values.name}
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

    <InputGroup
      as="textarea"
      error={errors.description}
      label="Tell us about you (or your organisation)"
      name="description"
      touched={touched.description}
      value={values.description}
    />

    <PrimaryButton className="w-full" type="submit">
      Save
    </PrimaryButton>
  </Form>
);

interface OnboardingFormProps {
  initialValues: OnboardingFormValues;
  onSubmit: (values: OnboardingFormValues) => void;
}

export const OnboardingForm = withFormik<OnboardingFormProps, OnboardingFormValues>({
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
