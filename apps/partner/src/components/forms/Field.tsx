import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Field as FormikField } from "formik";

interface FieldProps {
  as?: string;
  children: ReactNode;
  className: string;
  isDisabled?: boolean;
  isError?: boolean;
  min?: string;
  name: string;
  placeholder?: string;
  testId?: string;
  type?: string;
  value?: string | number | boolean | null;
}

export const Field: FC<FieldProps> = ({
  as,
  children,
  className,
  isDisabled,
  isError,
  min,
  name,
  placeholder,
  testId,
  type,
  value,
}) => {
  return (
    <FormikField
      as={as}
      className={cx(className, {
        "border-red-300 placeholder-red-400": isError,
        "bg-gray-100": isDisabled,
      })}
      data-cy={testId}
      disabled={isDisabled}
      min={min}
      name={name}
      placeholder={placeholder}
      type={type || "text"}
      value={value}
    >
      {children}
    </FormikField>
  );
};
