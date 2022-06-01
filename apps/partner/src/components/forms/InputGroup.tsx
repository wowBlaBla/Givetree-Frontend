import React, { FC, ReactNode } from "react";
import { Field } from "./Field";
import { isEmpty, kebabCase } from "lodash";
import { InputErrorBox } from "./InputError";
import { Label } from "./Label";

interface InputGroupProps {
  as?: string;
  children?: ReactNode;
  disabled?: boolean;
  error?: string;
  label: string;
  min?: string;
  name: string;
  placeholder?: string;
  testId?: string;
  touched?: boolean;
  type?: string;
  value?: number | string | boolean | null;
}

export const InputGroup: FC<InputGroupProps> = ({
  as,
  children,
  disabled,
  error,
  label,
  min,
  name,
  placeholder,
  testId,
  touched,
  type,
  value,
}) => {
  const hasError = touched && !isEmpty(error);

  return (
    <div className="form-control w-full">
      <Label htmlFor={name}></Label>
      <label htmlFor={name} className="label">
        <span>{label}</span>
      </label>

      <div className="mt-1">
        <Field
          as={as}
          className="input input-bordered w-full"
          isError={hasError}
          isDisabled={disabled}
          min={min}
          name={name}
          placeholder={placeholder}
          testId={testId || kebabCase(name)}
          type={type}
          value={value}
        >
          {children}
        </Field>
      </div>
      <InputErrorBox hasError={hasError} message={error} />
    </div>
  );
};
