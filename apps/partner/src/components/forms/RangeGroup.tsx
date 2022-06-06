import React, { FC, ReactNode } from "react";
import { Field } from "formik";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";

interface RangeGroupProps {
  children?: ReactNode;
  disabled?: boolean;
  error?: string;
  label: string;
  name: string;
  placeholder?: string;
  testId?: string;
  touched?: boolean;
  type?: string;
  value?: number | string | boolean | null;
}

export const RangeGroup: FC<RangeGroupProps> = ({
  disabled,
  error,
  label,
  name,
  testId,
  touched,
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
          className="range w-full"
          disabled={disabled}
          max={10}
          min={1}
          step={1}
          name={name}
          data-cy={testId || kebabCase(name)}
          type="range"
          value={value}
        />
        <div className="flex justify-between px-2">
          {[...Array(10).keys()].map((number, idx) => (
            <span key={idx}>{number + 1}</span>
          ))}
        </div>
      </div>
      <InputErrorBox hasError={hasError} message={error} />
    </div>
  );
};
