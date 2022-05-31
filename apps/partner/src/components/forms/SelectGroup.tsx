import React, { ChangeEventHandler, FC, FocusEventHandler } from "react";

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
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  selected?: SelectOption | null;
  testId?: string;
  touched?: boolean;
}

const isSelected = (option: SelectOption, selectedOption?: SelectOption | null) => {
  return selectedOption ? selectedOption.id === option.id : false;
};

export const SelectGroup: FC<SelectGroupProps> = ({
  disabled,
  error,
  includeBlank,
  label,
  name,
  onBlur,
  onChange,
  options,
  selected,
  testId,
  touched,
}) => {
  const hasError = touched && !isEmpty(error);

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
          value={selected ? selected.id : undefined}
          onBlur={onBlur}
          onChange={onChange}
        >
          {includeBlank && <option value="">Select</option>}
          {options &&
            options.map((option, i) => (
              <option
                key={i}
                label={option.value}
                value={option.id}
                selected={isSelected(option, selected)}
              />
            ))}
        </Field>
        <InputErrorBox hasError={hasError} message={error} />
      </div>
    </div>
  );
};
