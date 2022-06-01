import React, { FC } from "react";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";
import IntlTelInput, { CountryData } from "react-intl-tel-input";

interface PhoneInputGroupProps {
  disabled?: boolean;
  error?: string;
  label: string;
  name: string;
  value?: string;
  setValue: (name: string, value: string | boolean) => void;
  placeholder?: string;
  testId?: string;
  touched?: boolean;
  type?: string;
  validationFieldName?: string;
}

export const PhoneInputGroup: FC<PhoneInputGroupProps> = ({
  disabled,
  error,
  label,
  name,
  setValue,
  testId,
  touched,
  value,
  validationFieldName,
}) => {
  const hasError = (touched && !isEmpty(error)) || !!error;

  const handleOnChange = async (
    isValid: boolean,
    _value: string,
    _selectedCountryData: CountryData,
    fullNumber: string,
    _extension: string
  ) => {
    if (validationFieldName) {
      await setValue(validationFieldName, isValid);
    }

    await setValue(name, fullNumber);
  };

  return (
    <div className="form-control w-full mt-5">
      <label htmlFor={name} className="label">
        <span>{label}</span>
      </label>

      <IntlTelInput
        inputClassName="input input-bordered w-full"
        data-cy={testId || kebabCase(name)}
        disabled={disabled}
        preferredCountries={["au", "nz"]}
        onPhoneNumberChange={handleOnChange}
        fieldName={name}
        defaultValue={value}
      />

      <InputErrorBox hasError={hasError} message={error} />
    </div>
  );
};
