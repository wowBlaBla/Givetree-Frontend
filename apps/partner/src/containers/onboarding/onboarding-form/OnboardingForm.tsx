import React, { FC } from "react";
import { addDays, endOfDay, format } from "date-fns";
import { withFormik, FormikProps, Form } from "formik";
import * as yup from "yup";
import {
  ARTWORK_RADIO_OPTIONS,
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
import { FileUploadGroup } from "../../../components/forms/FileUploadGroup";
import { LegalEntityType } from "../../../typed/legalEntityType";

const InnerOnboardingForm: FC<FormikProps<OnboardingFormValues>> = ({
  errors,
  touched,
  values,
  setFieldValue,
}) => (
  <Form className="flex flex-col space-y-10">
    <SelectGroup
      error={errors.userType}
      includeBlankOption
      blankOptionText="Select Partner"
      label="Are you a Content Creator or Charity?"
      name="userType"
      options={USER_TYPE_OPTIONS}
      touched={touched.userType}
      value={values.userType}
      setValue={setFieldValue}
    />

    <div>
      <h3 className="text-2xl font-semibold">Account information</h3>
      <p className="py-2 text-gray-700 border-b border-gray-100 border-1">
        This information will be displayed publicly on the GiveTree platform.
      </p>

      <FileUploadGroup
        label="Logo image"
        name="logoUrl"
        selectFileButtonText="Select image"
        value={values.logoUrl}
        setValue={setFieldValue}
      />

      {values.userType === PartnerType.ContentCreator && (
        <InputGroup
          error={errors.aliasName}
          label="What is your artist name?"
          name="aliasName"
          touched={touched.aliasName}
          value={values.aliasName}
        />
      )}

      <InputGroup
        as="textarea"
        error={errors.description}
        label="Tell us about you (or your organisation)"
        name="description"
        touched={touched.description}
        value={values.description}
      />
    </div>

    <div>
      <h3 className="text-2xl font-semibold">User details</h3>
      <p className="py-2 text-gray-700 border-b border-gray-100 border-1">
        This information will be used as a point of contact.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputGroup
          error={errors.contactEmail}
          label="Email address"
          name="contactEmail"
          touched={touched.contactEmail}
          value={values.contactEmail}
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputGroup
          error={errors.country}
          label="Country"
          name="country"
          touched={touched.country}
          value={values.country}
        />
      </div>
    </div>

    {values.userType === PartnerType.Charity && (
      <div className="flex flex-col pt-12 space-y-1">
        <h3 className="text-2xl font-semibold">Charity Information</h3>
        <SelectGroup
          error={errors.charityEntityType}
          includeBlankOption
          blankOptionText="Select Entity Type"
          label="Legal Entity Type"
          name="charityEntityType"
          options={LEGAL_ENTITY_TYPE_OPTIONS}
          touched={touched.charityEntityType}
          value={values.charityEntityType}
          setValue={setFieldValue}
        />

        {values.charityEntityType !== LegalEntityType.SoleTrader && (
          <>
            <InputGroup
              error={errors.charityAbn}
              label="ABN"
              name="charityAbn"
              touched={touched.charityAbn}
              value={values.charityAbn}
            />
          </>
        )}

        <InputGroup
          error={errors.charityAddress}
          label="Business Address"
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

        {values.charityAcceptDirectDonations && (
          <InputGroup
            as="textarea"
            error={errors.cryptoOffRampStrategy}
            label="How will you convert your cryptocurrency donations to fiat(AUD)?"
            name="cryptoOffRampStrategy"
            touched={touched.cryptoOffRampStrategy}
            value={values.cryptoOffRampStrategy}
          />
        )}

        <RadioGroup
          legend="Select Create Fundraiser"
          label="Will you participate in NFT fundraisers?"
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

    <div>
      <h3 className="pt-12 text-2xl font-semibold">Socials</h3>
      <p className="py-2 text-gray-700 border-b border-gray-100 border-1">
        We will use this information to verify your authenticity and following.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputGroup
          error={errors.websiteUrl}
          label="Website Url"
          name="websiteUrl"
          touched={touched.websiteUrl}
          value={values.websiteUrl}
        />

        <InputGroup
          error={errors.discordUrl}
          label="Discord Url (optional)"
          name="discordUrl"
          touched={touched.discordUrl}
          value={values.discordUrl}
        />

        <InputGroup
          error={errors.twitterUrl}
          label="Twitter Url (optional)"
          name="twitterUrl"
          touched={touched.twitterUrl}
          value={values.twitterUrl}
        />
      </div>

      <div>
        <h3 className="pt-12 text-2xl font-semibold">Wallet Addresses</h3>
        <p className="py-2 text-gray-700 border-b border-gray-100 border-1">
          We will use this information to link our smart contracts. You can come back to
          this information at a later date if you do not have them now.
        </p>

        <InputGroup
          error={errors.ethWalletAddress}
          label="Ethereum wallet address"
          name="ethWalletAddress"
          touched={touched.ethWalletAddress}
          value={values.ethWalletAddress}
        />

        <InputGroup
          error={errors.solWalletAddress}
          label="Solana wallet address"
          name="solWalletAddress"
          touched={touched.solWalletAddress}
          value={values.solWalletAddress}
        />

        <InputGroup
          error={errors.maticWalletAddress}
          label="Matic wallet address"
          name="maticWalletAddress"
          touched={touched.maticWalletAddress}
          value={values.maticWalletAddress}
        />
      </div>
    </div>

    <div>
      <h3 className="pt-12 text-2xl font-semibold">Survey questions</h3>
      <p className="py-2 text-gray-700 border-b border-gray-100 border-1">
        Tell us about your experience working with cryptocurrency and NFT&lsquo;s.
      </p>

      <div className="gap-4 mt-4">
        <RangeGroup
          error={errors.cryptoActivityRating}
          label="How involved are you in the NFT community?"
          name="cryptoActivityRating"
          touched={touched.cryptoActivityRating}
          value={values.cryptoActivityRating}
        />

        <RangeGroup
          error={errors.cryptoExperienceRating}
          label="What level of experience would you rate your blockchain and NFT experience?"
          name="cryptoExperienceRating"
          touched={touched.cryptoExperienceRating}
          value={values.cryptoExperienceRating}
        />

        <RangeGroup
          error={errors.cryptoConfidenceRating}
          label="What would you say your confidence level is with blockchain and NFT's?"
          name="cryptoConfidenceRating"
          touched={touched.cryptoConfidenceRating}
          value={values.cryptoConfidenceRating}
        />
      </div>
    </div>

    <div>
      <h3 className="pt-12 text-2xl font-semibold">Launch Information</h3>
      <p className="py-2 text-gray-700 border-b border-gray-100 border-1">
        Help GiveTree understand your go live strategy.
      </p>

      <div className="gap-4 mt-4">
        {values.userType === PartnerType.ContentCreator && (
          <RadioGroup
            legend="Artwork ready"
            label="Do you have all your artwork ready?"
            name="isArtworkReady"
            options={ARTWORK_RADIO_OPTIONS}
            value={values.isArtworkReady}
            setValue={setFieldValue}
          />
        )}

        <InputGroup
          error={errors.expectedReleaseDate}
          label="What is your expected go live date?"
          min={format(new Date(), "yyy-MM-dd")}
          name="expectedReleaseDate"
          touched={touched.expectedReleaseDate}
          value={values.expectedReleaseDate}
          type="date"
        />
      </div>
    </div>

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
    contactEmail: initialValues.contactEmail || "",
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
    contactEmail: yup
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
    userType: yup.string().required("Partner is required"),
    websiteUrl: yup.string(),
  }),
})(InnerOnboardingForm);
