import React, { FC } from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";
import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SelectGroup } from "../../components/forms/SelectGroup";
import { RangeGroup } from "../../components/forms/RangeGroup";
import { PhoneInputGroup } from "../../components/forms/PhoneInputGroup";

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
  isPhoneValid?: boolean;
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
  setFieldValue,
}) => {
  const handlePhoneInputOnChange = async (
    isValid: boolean,
    name: string,
    value: string
  ) => {
    console.log(isValid);
    await setFieldValue("isPhoneValid", isValid);
    await setFieldValue(name, value);
  };

  console.log(errors);

  return (
    <Form className="flex flex-col space-y-1">
      <SelectGroup
        error={errors.userType}
        label="Are you a Content Creator or Charity?"
        name="userType"
        touched={touched.userType}
        value={values.userType}
        options={["Content Creator", "Charity"]}
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

        <PhoneInputGroup
          error={errors.contactNumber}
          label="Contact number"
          name="contactNumber"
          onPhoneInputChange={handlePhoneInputOnChange}
          touched={touched.contactNumber}
          value={values.contactNumber}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputGroup
          error={errors.email}
          label="Email address"
          name="email"
          touched={touched.email}
          value={values.email}
        />

        <InputGroup
          error={errors.country}
          label="Country"
          name="country"
          touched={touched.country}
          value={values.country}
        />
      </div>

      <InputGroup
        as="textarea"
        error={errors.description}
        label="Tell us about you (or your organisation)"
        name="description"
        touched={touched.description}
        value={values.description}
      />

      <RangeGroup
        error={errors.cryptoActivityRating}
        label="Rate how active you are in crypto"
        name="cryptoActivityRating"
        touched={touched.cryptoActivityRating}
        value={values.cryptoActivityRating}
      />

      <RangeGroup
        error={errors.cryptoConfidenceRating}
        label="Rate your crypto knowledge"
        name="cryptoConfidenceRating"
        touched={touched.cryptoConfidenceRating}
        value={values.cryptoConfidenceRating}
      />

      <RangeGroup
        error={errors.cryptoExperienceRating}
        label="Rate your experience level"
        name="cryptoExperienceRating"
        touched={touched.cryptoExperienceRating}
        value={values.cryptoExperienceRating}
      />

      <InputGroup
        as="textarea"
        error={errors.cryptoOffRampStrategy}
        label="What is your off ramping strategy?"
        name="cryptoOffRampStrategy"
        touched={touched.cryptoOffRampStrategy}
        value={values.cryptoOffRampStrategy}
      />

      <InputGroup
        error={errors.expectedReleaseDate}
        label="What is your expected go live date?"
        name="expectedReleaseDate"
        touched={touched.expectedReleaseDate}
        value={values.expectedReleaseDate}
      />

      <InputGroup
        error={errors.logoUrl}
        label="What is your logo url"
        name="logoUrl"
        touched={touched.logoUrl}
        value={values.logoUrl}
      />

      <InputGroup
        error={errors.ethWalletAddress}
        label="What is your Ethereum wallet address?"
        name="ethWalletAddress"
        touched={touched.ethWalletAddress}
        value={values.ethWalletAddress}
      />

      <InputGroup
        error={errors.solWalletAddress}
        label="What is your Solana wallet address?"
        name="solWalletAddress"
        touched={touched.solWalletAddress}
        value={values.solWalletAddress}
      />

      <h3 className="text-2xl font-semibold">Socials</h3>
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
        error={errors.websiteUrl}
        label="Website Url"
        name="websiteUrl"
        touched={touched.websiteUrl}
        value={values.websiteUrl}
      />

      <PrimaryButton type="submit">Save</PrimaryButton>
    </Form>
  );
};

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
    expectedReleaseDate: initialValues.expectedReleaseDate || "",
    firstName: initialValues.firstName || "",
    isArtworkReady: initialValues.isArtworkReady || false,
    isPhoneValid: false,
    lastName: initialValues.lastName || "",
    logoUrl: initialValues.logoUrl || "",
    solWalletAddress: initialValues.solWalletAddress || "",
    twitterUrl: initialValues.twitterUrl || "",
    userType: initialValues.userType || "",
    websiteUrl: initialValues.websiteUrl || "",
  }),
  validationSchema: yup.object().shape({
    aliasName: yup.string(),
    contactNumber: yup
      .string()
      .test("contactNumber", "Contact number is invalid", function (value) {
        if (!value) {
          return true;
        }

        return this.parent.isPhoneValid;
      }),
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
    isPhoneValid: yup.boolean(),
    lastName: yup.string().required("Last name is required"),
    logoUrl: yup.string(),
    solWalletAddress: yup.string(),
    twitterUrl: yup.string(),
    userType: yup.string(),
    websiteUrl: yup.string(),
  }),
})(InnerOnboardingForm);
