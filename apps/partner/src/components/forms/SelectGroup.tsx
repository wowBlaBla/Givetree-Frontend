import React, { ChangeEvent, FC } from "react";
import cx from "classnames";
import { Field } from "formik";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";
import { Label } from "./Label";

export interface SelectOption {
  id: string;
  value: string;
}

const getSelected = (
  options: SelectOption[],
  selectedOption?: string
): SelectOption | undefined => {
  const option = options.find((option) => option.id === selectedOption);

  if (option) {
    return option;
  }

  return undefined;
};

interface SelectGroupProps {
  disabled?: boolean;
  error?: string;
  includeBlank?: boolean;
  label: string;
  name: string;
  onChange: (name: string, option: string) => void;
  options: SelectOption[];
  value?: string;
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
  onChange,
  value,
  testId,
  touched,
}) => {
  const selected = getSelected(options, value);
  const hasError = touched && !isEmpty(error);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
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
          value={value ? selected?.id : false}
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
