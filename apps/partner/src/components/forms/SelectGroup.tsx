import React, { FC } from "react";
import { Field } from "./Field";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";

interface SelectGroupOption {
  value: number | string;
  label: string;
}

interface SelectGroupProps {
  disabled?: boolean;
  error?: string;
  label: string;
  name: string;
  options: SelectGroupOption[];
  placeholder?: string;
  testId?: string;
  touched?: boolean;
  type?: string;
  value?: null | number | string;
}

export const SelectGroup: FC<SelectGroupProps> = ({
  disabled,
  error,
  label,
  name,
  options,
  placeholder,
  testId,
  touched,
  type,
  value,
}) => {
  const hasError = touched && !isEmpty(error);

  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label">
        <span>{label}</span>
      </label>

      <div className="relative mt-1">
        <Field
          as="select"
          className="select select-bordered w-full"
          isError={hasError}
          isDisabled={disabled}
          name={name}
          placeholder={placeholder}
          testId={testId || kebabCase(name)}
          type={type}
          value={value}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      </div>
      <InputErrorBox hasError={hasError} message={error} />
    </div>
  );
};
