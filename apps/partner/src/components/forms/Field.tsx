import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Field as FormikField } from "formik";

export const FieldStyles = `
  block
  w-full
  border
  border-gray-300
  rounded-md
  shadow-sm
  px-4
  py-2
  md:py-3
  appearance-none
  placeholder-gray-400

  focus:border-brand-black
  focus:outline-none
  focus:ring-brand-black
`;

interface FieldProps {
  as?: string;
  children: ReactNode;
  isDisabled?: boolean;
  isError?: boolean;
  name: string;
  placeholder?: string;
  testId?: string;
  type?: string;
  value?: null | number | string;
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
  const className = cx(FieldStyles, {
    "border-red-300 placeholder-red-400": isError,
    "bg-gray-100": isDisabled,
  });

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
