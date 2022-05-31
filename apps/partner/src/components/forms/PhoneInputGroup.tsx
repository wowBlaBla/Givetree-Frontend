import React, { FC } from "react";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";
import IntlTelInput, { CountryData } from "react-intl-tel-input";

interface PhoneInputGroupProps {
  disabled?: boolean;
  error?: string;
  label: string;
  name: string;
  onPhoneInputChange: (isValid: boolean, name: string, value: string) => void;
  placeholder?: string;
  testId?: string;
  touched?: boolean;
  type?: string;
  value?: string;
}

export const PhoneInputGroup: FC<PhoneInputGroupProps> = ({
  disabled,
  error,
  label,
  name,
  onPhoneInputChange,
  testId,
  touched,
  value,
}) => {
  const hasError = (touched && !isEmpty(error)) || !!error;

  const handleOnChange = (
    isValid: boolean,
    _value: string,
    _selectedCountryData: CountryData,
    fullNumber: string,
    _extension: string
  ) => {
    onPhoneInputChange(isValid, name, fullNumber);
  };

  return (
    <div className="form-control w-full">
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
