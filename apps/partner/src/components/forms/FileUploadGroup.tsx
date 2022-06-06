import React, { FC, useState } from "react";
import { isEmpty } from "lodash";
import { InputErrorBox } from "./InputError";
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_PRESET } from "../../configs/constants";
import { showUploadWidget } from "../../utils/showUploadWidget";
import { OutlineButton } from "../OutlineButton";
import { Helmet } from "react-helmet";
import { LoadingContainer } from "../LoadingContainer";

interface FileUploadGroupProps {
  disabled?: boolean;
  error?: string;
  label: string;
  name: string;
  testId?: string;
  touched?: boolean;
  selectFileButtonText?: string;
  setValue: (name: string, value: string) => void;
  value: string;
}

export const FileUploadGroup: FC<FileUploadGroupProps> = ({
  disabled,
  error,
  label,
  name,
  touched,
  value,
  setValue,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const hasError = touched && !isEmpty(error);

  const handleUpload = async () => {
    setIsLoading(true);

    showUploadWidget({
      cloudName: CLOUDINARY_CLOUD_NAME,
      uploadPreset: CLOUDINARY_PRESET,
      fieldName: name,
      setValue,
      setIsLoading,
    });
  };

  return (
    <div className="form-control w-full">
      {isLoading && <LoadingContainer />}

      <label htmlFor={name} className="label">
        <span>{label}</span>
      </label>

      <div className="flex flex-col space-y-4 justify-center items-center py-10 px-5 border-4 border-dashed border-gray-200 rounded-lg bg-gray-50">
        {!!value && <img src={value} className="w-60 h-60" />}
        <div>
          <OutlineButton
            id="upload_widget"
            type="button"
            disabled={disabled}
            onClick={handleUpload}
          >
            Upload File
          </OutlineButton>
        </div>
      </div>

      <div className="mt-1">
        <InputErrorBox hasError={hasError} message={error} />
      </div>

      <Helmet>
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        />
      </Helmet>
    </div>
  );
};
