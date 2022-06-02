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
  includeBlankOption?: boolean;
  blankOptionText?: string;
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
  includeBlankOption,
  blankOptionText,
  label,
  name,
  options,
  value,
  setValue,
  testId,
  touched,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(value || "");
  const hasError = touched && !isEmpty(error);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    // Formik's setFieldValue function to set value
    setValue(name, e.target.value);
  };

  return (
    <div className="form-control w-full">
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
          {includeBlankOption && <option value="">{blankOptionText ?? "Select"}</option>}
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
