import React, { ChangeEvent, FC, useState } from "react";
import cx from "classnames";
import { Field } from "formik";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";
import { Label } from "./Label";

export interface SelectOption {
  id: string;
  value: string;
}

interface SelectGroupProps {
  disabled?: boolean;
  error?: string;
  includeBlank?: boolean;
  label: string;
  name: string;
  options: SelectOption[];
  value: string | null;
  setValue: (name: string, value: string) => void;
  testId?: string;
  touched?: boolean;
}

export const SelectGroup: FC<SelectGroupProps> = ({
  disabled,
  error,
  includeBlank,
  label,
  name,
  options,
  value,
  setValue,
  testId,
  touched,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(value);
  const hasError = touched && !isEmpty(error);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    // Formik's setFieldValue function to set value
    setValue(name, e.target.value);
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="relative mt-1">
        <Field
          as="select"
          className={cx("select select-bordered w-full", {
            "border-red-300 placeholder-red-400": hasError,
            "bg-gray-100": disabled,
          })}
          data-cy={testId || kebabCase(name)}
          disabled={disabled}
          name={name}
          value={selectedValue}
          onChange={handleOnChange}
        >
          {includeBlank && <option value="">Select</option>}
          {options &&
            options.map((option, i) => (
              <option key={i} label={option.value} value={option.id} />
            ))}
        </Field>
        <InputErrorBox hasError={hasError} message={error} />
      </div>
    </div>
  );
};
