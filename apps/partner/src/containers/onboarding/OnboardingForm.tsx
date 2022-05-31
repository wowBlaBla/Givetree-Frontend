import React, { FC } from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";
import { InputGroup } from "../../components/forms/InputGroup";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SelectGroup } from "../../components/forms/SelectGroup";
import { RangeGroup } from "../../components/forms/RangeGroup";
import { PhoneInputGroup } from "../../components/forms/PhoneInputGroup";
import { addDays, endOfDay, format } from "date-fns";
// import { LegalEntityType } from "../../typed/legalEntityType";
import { PartnerType } from "../../typed/partnerType";
import { FileUploadGroup } from "../../components/forms/file-upload/FileUploadGroup";

export interface OnboardingFormValues {
  aliasName: string;
  charityAbn: string;
  charityAddress: string;
  charityAcceptDirectDonations: boolean;
  charityAllowProxyFundraiser: boolean;
  charityApprovalBeforeGoLive: boolean;
  charityCreateFundraiser: boolean;
  charityEntityType: string;
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
  expectedReleaseDate: string;
  firstName: string;
  isArtworkReady: boolean;
  isPhoneValid?: boolean;
  lastName: string;
  logoUrl: string;
  maticWalletAddress: string;
  primaryContactAddress: string;
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
    await setFieldValue("isPhoneValid", isValid);
    await setFieldValue(name, value);
  };

  const userTypeOptions = [
    {
      id: PartnerType.contentCreator,
      value: "Content Creator",
    },
    {
      id: PartnerType.charity,
      value: "Charity",
    },
  ];

  // const charityAcceptDirectDonationsOptions = [
  //   {
  //     label: "Yes",
  //     value: "yes",
  //   },
  //   {
  //     label: "No",
  //     value: "no",
  //   },
  // ];

  return (
    <Form className="flex flex-col space-y-1">
      <SelectGroup
        error={errors.userType}
        label="Are you a Content Creator or Charity?"
        name="userType"
        touched={touched.userType}
        options={userTypeOptions}
        includeBlank
      />

      {values.userType === "Charity" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* <SelectGroup
              error={errors.charityAcceptDirectDonations}
              label="Do you want to accept direct donations of cryptocurrency?"
              name="charityAcceptDirectDonations"
              touched={touched.charityAcceptDirectDonations}
              value={values.charityAcceptDirectDonations}
              options={charityAcceptDirectDonationsOptions}
            /> */}

          <InputGroup
            error={errors.lastName}
            label="Last name"
            name="lastName"
            touched={touched.lastName}
            value={values.lastName}
          />
        </div>
      )}

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
          label="Alias name"
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

      <FileUploadGroup
        label="Logo Url"
        name="logoUrl"
        selectFileButtonText="Select image"
      />

      <RangeGroup
        error={errors.cryptoActivityRating}
        label="How active you are in the crypto space?"
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
        label="Rate your crypto experience level"
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
        min={new Date().toDateString()}
        name="expectedReleaseDate"
        touched={touched.expectedReleaseDate}
        value={values.expectedReleaseDate}
        type="date"
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
    charityEntityType: initialValues.charityEntityType || "",
    charityAddress: initialValues.charityAddress || "",
    charityAbn: initialValues.charityAbn || "",
    charityAcceptDirectDonations: initialValues.charityAcceptDirectDonations || false,
    charityAllowProxyFundraiser: initialValues.charityAllowProxyFundraiser || false,
    charityApprovalBeforeGoLive: initialValues.charityApprovalBeforeGoLive || false,
    charityCreateFundraiser: initialValues.charityCreateFundraiser || false,
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
    expectedReleaseDate:
      initialValues.expectedReleaseDate || format(new Date(), "yyyy-MM-dd"),
    firstName: initialValues.firstName || "",
    isArtworkReady: initialValues.isArtworkReady || false,
    isPhoneValid: false,
    lastName: initialValues.lastName || "",
    logoUrl: initialValues.logoUrl || "",
    maticWalletAddress: initialValues.maticWalletAddress || "",
    primaryContactAddress: initialValues.primaryContactAddress || "",
    solWalletAddress: initialValues.solWalletAddress || "",
    twitterUrl: initialValues.twitterUrl || "",
    userType: initialValues.userType || "",
    websiteUrl: initialValues.websiteUrl || "",
  }),
  validationSchema: yup.object().shape({
    aliasName: yup.string(),
    charityEntityType: yup.string(),
    charityAddress: yup.string(),
    charityAbn: yup.string(),
    charityAcceptDirectDonations: yup.boolean(),
    charityAllowProxyFundraiser: yup.boolean(),
    charityApprovalBeforeGoLive: yup.boolean(),
    charityCreateFundraiser: yup.boolean(),
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
    expectedReleaseDate: yup
      .date()
      .required("Go live date is required")
      .min(addDays(endOfDay(new Date()), -1), "past dates are not allowed"),
    firstName: yup.string().required("First name is required"),
    isArtworkReady: yup.boolean(),
    isPhoneValid: yup.boolean(),
    lastName: yup.string().required("Last name is required"),
    logoUrl: yup.string(),
    maticWalletAddress: yup.string(),
    primaryContactAddress: yup.string(),
    solWalletAddress: yup.string(),
    twitterUrl: yup.string(),
    userType: yup.string(),
    websiteUrl: yup.string(),
  }),
})(InnerOnboardingForm);
