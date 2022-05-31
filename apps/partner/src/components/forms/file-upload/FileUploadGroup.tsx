import React, { FC } from "react";
import { isEmpty } from "lodash";
import { FileUpload } from "./FileUpload";
import { InputErrorBox } from "../InputError";

interface FileUploadGroupProps {
  disabled?: boolean;
  error?: string;
  instructionText?: string;
  label: string;
  name: string;
  placeholder?: string;
  testId?: string;
  touched?: boolean;
  selectFileButtonText?: string;
  value?: number | string | boolean | null;
}

export const FileUploadGroup: FC<FileUploadGroupProps> = ({
  disabled,
  error,
  instructionText,
  label,
  name,
  selectFileButtonText,
  testId,
  touched,
}) => {
  const hasError = touched && !isEmpty(error);

  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label">
        <span>{label}</span>
      </label>

      <div className="mt-1">
        <FileUpload
          testId={testId}
          disabled={disabled}
          instructionText={instructionText}
          selectFileButtonText={selectFileButtonText}
        />
      </div>

      <InputErrorBox hasError={hasError} message={error} />
    </div>
  );
};
