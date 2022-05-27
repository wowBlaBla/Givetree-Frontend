import React, { FC, ReactNode } from "react";
import { isEmpty, kebabCase } from "lodash";
import { Field } from "./Field";
import { InputErrorBox } from "./InputError";

interface InputGroupProps {
  as?: string;
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

export const InputGroup: FC<InputGroupProps> = ({
  as,
  children,
  disabled,
  error,
  label,
  name,
  placeholder,
  testId,
  touched,
  type,
  value,
}) => {
  const hasError = touched && !isEmpty(error);

  return (
    <div className="flex flex-col my-1">
      <label htmlFor={name} className="block text-base text-gray-800 font-semibold">
        {label}
      </label>

      <div className="mt-1">
        <Field
          as={as}
          isDisabled={disabled}
          isError={hasError}
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
