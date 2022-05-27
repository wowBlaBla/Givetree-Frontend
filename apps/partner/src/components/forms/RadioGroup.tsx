import React, { FC, ReactNode } from "react";
import { Field } from "formik";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";

interface RangeGroupProps {
  children?: ReactNode;
  disabled?: boolean;
  error?: string;
  label: string;
  min: number;
  max: number;
  step: number;
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
  min,
  max,
  step,
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
          max={max}
          min={min}
          step={step}
          name={name}
          data-cy={testId || kebabCase(name)}
          type="range"
          value={value}
        />
        <div className="flex justify-between px-2">
          {[...Array(min - max + 1).keys()].map((number, idx) => (
            <span key={idx}>{number + max}</span>
          ))}
        </div>
      </div>
      <InputErrorBox hasError={hasError} message={error} />
    </div>
  );
};
