import React, { FC } from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";
import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";

export interface OnboardingFormValues {
  aliasName: string;
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
      error={errors.aliasName}
      label="What is your artist or organisation name?"
      name="aliasName"
      touched={touched.aliasName}
      value={values.aliasName}
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
    aliasName: initialValues.aliasName || "",
    description: initialValues.description || "",
    websiteUrl: initialValues.websiteUrl || "",
    discordUrl: initialValues.discordUrl || "",
    twitterUrl: initialValues.twitterUrl || "",
  }),
  validationSchema: yup.object().shape({
    aliasName: yup.string().required("Required"),
    description: yup.string().required("Required"),
    websiteUrl: yup.string(),
    discordUrl: yup.string(),
    twitterUrl: yup.string(),
  }),
})(InnerOnboardingForm);
