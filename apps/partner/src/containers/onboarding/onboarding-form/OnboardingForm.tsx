import React, { FC } from "react";
import { addDays, endOfDay, format } from "date-fns";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";
import {
  CHARITY_RADIO_OPTIONS,
  LEGAL_ENTITY_TYPE_OPTIONS,
  USER_TYPE_OPTIONS,
} from "../Onboarding.constants";
import { OnboardingFormProps, OnboardingFormValues } from "./OnboardingForm.types";
import { InputGroup } from "../../../components/forms/InputGroup";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { SelectGroup } from "../../../components/forms/SelectGroup";
import { RangeGroup } from "../../../components/forms/RangeGroup";
import { PhoneInputGroup } from "../../../components/forms/PhoneInputGroup";
import { PartnerType } from "../../../typed/partnerType";
import { RadioGroup } from "../../../components/forms/RadioGroup";

const InnerOnboardingForm: FC<FormikProps<OnboardingFormValues>> = ({
  errors,
  touched,
  values,
  setFieldValue,
}) => (
  <Form className="flex flex-col space-y-1">
    <SelectGroup
      includeBlank
      label="Are you a Content Creator or Charity?"
      name="userType"
      options={USER_TYPE_OPTIONS}
      value={values.userType}
      setValue={setFieldValue}
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
        label="Alias name"
        name="aliasName"
        touched={touched.aliasName}
        value={values.aliasName}
      />

      <PhoneInputGroup
        error={errors.contactNumber}
        label="Contact number"
        name="contactNumber"
        validationFieldName="isPhoneValid"
        touched={touched.contactNumber}
        value={values.contactNumber}
        setValue={setFieldValue}
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

    {values.userType === PartnerType.Charity && (
      <div className="flex flex-col space-y-4 pt-5">
        <h3 className="text-2xl font-semibold">Charity Information</h3>

        <SelectGroup
          includeBlank
          label="Legal Entity Type"
          name="charityEntityType"
          options={LEGAL_ENTITY_TYPE_OPTIONS}
          value={values.charityEntityType}
          setValue={setFieldValue}
        />

        <InputGroup
          error={errors.charityAbn}
          label="ABN"
          name="charityAbn"
          touched={touched.charityAbn}
          value={values.charityAbn}
        />

        <InputGroup
          error={errors.charityAddress}
          label="Organisation Address"
          name="charityAddress"
          touched={touched.charityAddress}
          value={values.charityAddress}
        />

        <InputGroup
          error={errors.primaryContactAddress}
          label="Primary Contact Address"
          name="primaryContactAddress"
          touched={touched.primaryContactAddress}
          value={values.primaryContactAddress}
        />

        <RadioGroup
          legend="Select Accept Direct Donations"
          label="Do you want to accept direct donations of cryptocurrency?"
          name="charityAcceptDirectDonations"
          options={CHARITY_RADIO_OPTIONS}
          value={values.charityAcceptDirectDonations}
          setValue={setFieldValue}
        />

        <RadioGroup
          legend="Select Create Fundraiser"
          label="Do you want to create NFT fundraisers?"
          name="charityCreateFundraiser"
          options={CHARITY_RADIO_OPTIONS}
          value={values.charityCreateFundraiser}
          setValue={setFieldValue}
        />

        <RadioGroup
          legend="Select Allow Proxy Fundraiser"
          label="Do you want other people to be able to create NFT fundraisers on your behalf?"
          name="charityAllowProxyFundraiser"
          options={CHARITY_RADIO_OPTIONS}
          value={values.charityAllowProxyFundraiser}
          setValue={setFieldValue}
        />

        <RadioGroup
          legend="Select Approval Before Go Live"
          label="Do you want to approve NFT fundraisers which are created on your behalf before they go live to the public?"
          name="charityApprovalBeforeGoLive"
          options={CHARITY_RADIO_OPTIONS}
          value={values.charityApprovalBeforeGoLive}
          setValue={setFieldValue}
        />
      </div>
    )}

    <InputGroup
      as="textarea"
      error={errors.description}
      label="Tell us about you (or your organisation)"
      name="description"
      touched={touched.description}
      value={values.description}
    />

    <h3 className="text-2xl font-semibold pt-12">Socials</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    </div>

    {/* 
      <FileUploadGroup
        label="Logo Url"
        name="logoUrl"
        selectFileButtonText="Select image"
      /> */}

    <h3 className="text-2xl font-semibold pt-12">Wallet Addresses</h3>

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

    <InputGroup
      error={errors.maticWalletAddress}
      label="What is your Matic wallet address?"
      name="maticWalletAddress"
      touched={touched.maticWalletAddress}
      value={values.maticWalletAddress}
    />

    <h3 className="text-2xl font-semibold pt-12">Crypto Knowledge</h3>

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

    <h3 className="text-2xl font-semibold pt-12">Launch Information</h3>

    <InputGroup
      error={errors.expectedReleaseDate}
      label="What is your expected go live date?"
      min={format(new Date(), "yyy-MM-dd")}
      name="expectedReleaseDate"
      touched={touched.expectedReleaseDate}
      value={values.expectedReleaseDate}
      type="date"
    />

    <InputGroup
      as="textarea"
      error={errors.cryptoOffRampStrategy}
      label="What is your off ramping strategy?"
      name="cryptoOffRampStrategy"
      touched={touched.cryptoOffRampStrategy}
      value={values.cryptoOffRampStrategy}
    />

    <div className="flex flex-row-reverse w-full pt-5">
      <PrimaryButton className="px-10" type="submit">
        Save
      </PrimaryButton>
    </div>
  </Form>
);

const parseOnboardingFormValues = (values: OnboardingFormValues) => ({
  ...values,
  charityAcceptDirectDonations: Boolean(values.charityAcceptDirectDonations),
});

export const OnboardingForm = withFormik<OnboardingFormProps, OnboardingFormValues>({
  handleSubmit: async (values, { props: { onSubmit } }) => {
    await onSubmit(parseOnboardingFormValues(values));
  },
  mapPropsToValues: ({ initialValues }) => ({
    aliasName: initialValues.aliasName || "",
    charityAbn: initialValues.charityAbn || "",
    charityAddress: initialValues.charityAddress || "",
    charityAcceptDirectDonations: initialValues.charityAcceptDirectDonations || false,
    charityAllowProxyFundraiser: initialValues.charityAllowProxyFundraiser || false,
    charityApprovalBeforeGoLive: initialValues.charityApprovalBeforeGoLive || false,
    charityCreateFundraiser: initialValues.charityCreateFundraiser || false,
    charityEntityType: initialValues.charityEntityType || "",
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
