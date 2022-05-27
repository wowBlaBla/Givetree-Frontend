import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Field as FormikField } from "formik";

interface FieldProps {
  as?: string;
  children: ReactNode;
  isDisabled?: boolean;
  isError?: boolean;
  name: string;
  placeholder?: string;
  testId?: string;
  type?: string;
  value?: string | number | boolean | null;
}

export const Field: FC<FieldProps> = ({
  as,
  children,
  isDisabled,
  isError,
  name,
  placeholder,
  testId,
  type,
  value,
}) => {
  const className = cx(
    "block w-full border border-gray-400 rounded-lg shadow-sm py-2 px-3 text-base text-brand-black placeholder-gray-500 appearance-none focus:border-brand-black focus:outline-none focus:ring-brand-black",
    {
      "border-red-300 placeholder-red-400": isError,
      "bg-gray-100": isDisabled,
    }
  );

  return (
    <FormikField
      as={as}
      className={className}
      data-cy={testId}
      disabled={isDisabled}
      name={name}
      placeholder={placeholder}
      type={type || "text"}
      value={value}
    >
      {children}
    </FormikField>
  );
};
