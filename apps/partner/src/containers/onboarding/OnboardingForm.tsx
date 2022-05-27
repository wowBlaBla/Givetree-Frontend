import React, { FC } from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";
import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";

export interface OnboardingFormValues {
  aliasName: string;
  contactNumber: string;
  country: string;
  cryptoActivityRating: number;
  cryptoConfidenceRating: number;
  cryptoExperienceRating: number;
  cryptoOffRampStrategy: string;
  description: string;
  discordUrl: string;
  email: string;
  ethWalletAddress: string;
  expectedReleaseDate: string | null;
  firstName: string;
  isArtworkReady: boolean;
  lastName: string;
  logoUrl: string;
  solWalletAddress: string;
  twitterUrl: string;
  userType: string;
  websiteUrl: string;
}

const InnerOnboardingForm: FC<FormikProps<OnboardingFormValues>> = ({
  errors,
  touched,
  values,
}) => (
  <Form className="flex flex-col space-y-1">
    <InputGroup
      error={errors.userType}
      label="Are you a Content Creator or Charity?"
      name="userType"
      touched={touched.userType}
      value={values.userType}
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InputGroup
        error={errors.firstName}
        label="First name"
        name="firstName"
        touched={touched.firstName}
        value={values.firstName}
      />

      <InputGroup
        error={errors.lastName}
        label="Last name"
        name="lastName"
        touched={touched.lastName}
        value={values.lastName}
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InputGroup
        error={errors.aliasName}
        label="Alias name (username)"
        name="aliasName"
        touched={touched.aliasName}
        value={values.aliasName}
      />

      <InputGroup
        error={errors.contactNumber}
        label="Contact number"
        name="contactNumber"
        touched={touched.contactNumber}
        value={values.contactNumber}
      />
    </div>

    <InputGroup
      error={errors.country}
      label="What country are you based in?"
      name="country"
      touched={touched.country}
      value={values.country}
    />

    <InputGroup
      error={errors.cryptoActivityRating}
      label="Rate how active you are in crypto"
      name="cryptoActivityRating"
      touched={touched.cryptoActivityRating}
      value={values.cryptoActivityRating}
    />

    <InputGroup
      error={errors.cryptoConfidenceRating}
      label="Rate your crypto knowledge"
      name="cryptoConfidenceRating"
      touched={touched.cryptoConfidenceRating}
      value={values.cryptoConfidenceRating}
    />

    <InputGroup
      error={errors.cryptoExperienceRating}
      label="Rate your experience level"
      name="cryptoExperienceRating"
      touched={touched.cryptoExperienceRating}
      value={values.cryptoExperienceRating}
    />

    <InputGroup
      as="textarea"
      error={errors.description}
      label="Tell us about you (or your organisation)"
      name="description"
      touched={touched.description}
      value={values.description}
    />

    <InputGroup
      error={errors.discordUrl}
      label="Discord Url"
      name="discordUrl"
      touched={touched.discordUrl}
      value={values.discordUrl}
    />

    <InputGroup
      error={errors.email}
      label="What is your best point of contact email address?"
      name="email"
      touched={touched.email}
      value={values.email}
    />

    <InputGroup
      error={errors.ethWalletAddress}
      label="What is your Ethereum wallet address?"
      name="ethWalletAddress"
      touched={touched.ethWalletAddress}
      value={values.ethWalletAddress}
    />

    <InputGroup
      error={errors.expectedReleaseDate}
      label="What is your expected go live date?"
      name="expectedReleaseDate"
      touched={touched.expectedReleaseDate}
      value={values.expectedReleaseDate}
    />

    <InputGroup
      error={errors.isArtworkReady}
      label="Discord Url"
      name="isArtworkReady"
      touched={touched.isArtworkReady}
      value={values.isArtworkReady}
    />

    <InputGroup
      error={errors.logoUrl}
      label="What is your logo url"
      name="logoUrl"
      touched={touched.logoUrl}
      value={values.logoUrl}
    />

    <InputGroup
      error={errors.solWalletAddress}
      label="What is your Solana wallet address?"
      name="solWalletAddress"
      touched={touched.solWalletAddress}
      value={values.solWalletAddress}
    />

    <InputGroup
      error={errors.twitterUrl}
      label="Twitter Url"
      name="twitterUrl"
      touched={touched.twitterUrl}
      value={values.twitterUrl}
    />

    <InputGroup
      error={errors.websiteUrl}
      label="Website Url"
      name="websiteUrl"
      touched={touched.websiteUrl}
      value={values.websiteUrl}
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
  handleSubmit: async (values, { props: { onSubmit } }) => {
    await onSubmit(values);
  },
  mapPropsToValues: ({ initialValues }) => ({
    aliasName: initialValues.aliasName || "",
    contactNumber: initialValues.contactNumber || "",
    country: initialValues.country || "",
    cryptoActivityRating: initialValues.cryptoActivityRating || 1,
    cryptoConfidenceRating: initialValues.cryptoConfidenceRating || 1,
    cryptoExperienceRating: initialValues.cryptoExperienceRating || 1,
    cryptoOffRampStrategy: initialValues.cryptoOffRampStrategy || "",
    description: initialValues.description || "",
    discordUrl: initialValues.discordUrl || "",
    email: initialValues.email || "",
    ethWalletAddress: initialValues.ethWalletAddress || "",
    expectedReleaseDate: initialValues.expectedReleaseDate || null,
    firstName: initialValues.firstName || "",
    isArtworkReady: initialValues.isArtworkReady || false,
    lastName: initialValues.lastName || "",
    logoUrl: initialValues.logoUrl || "",
    solWalletAddress: initialValues.solWalletAddress || "",
    twitterUrl: initialValues.twitterUrl || "",
    userType: initialValues.userType || "",
    websiteUrl: initialValues.websiteUrl || "",
  }),
  validationSchema: yup.object().shape({
    aliasName: yup.string(),
    contactNumber: yup.string(),
    country: yup.string(),
    cryptoActivityRating: yup.number(),
    cryptoConfidenceRating: yup.number(),
    cryptoExperienceRating: yup.number(),
    cryptoOffRampStrategy: yup.string(),
    description: yup.string(),
    discordUrl: yup.string(),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email address is required"),
    ethWalletAddress: yup.string(),
    expectedReleaseDate: yup.string().nullable(),
    firstName: yup.string().required("First name is required"),
    isArtworkReady: yup.boolean(),
    lastName: yup.string().required("Last name is required"),
    logoUrl: yup.string(),
    solWalletAddress: yup.string(),
    twitterUrl: yup.string(),
    userType: yup.string(),
    websiteUrl: yup.string(),
  }),
})(InnerOnboardingForm);
