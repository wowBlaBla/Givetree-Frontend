import React, { FC } from "react";
import cx from "classnames";
import { useDropzone } from "react-dropzone";
import { UploadIcon } from "../../icons/UploadIcon";
import { OutlineButton } from "../../OutlineButton";
import { FileUploadProps, FILE_TYPE_EXTENSIONS } from "./FileUpload.types";

export const FileUpload: FC<FileUploadProps> = ({
  acceptedFileTypes = ["gif", "jpeg", "jpg", "png"],
  errorContent,
  instructionText = "Drag and drop your file(s) here",
  maxFiles = 1,
  multiple,
  selectFileButtonText = "Select file",
  testId,
  ...dropzoneProps
}) => {
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    accept: {
      "image/*": acceptedFileTypes.map(
        (acceptedFileType) => FILE_TYPE_EXTENSIONS[acceptedFileType]
      ),
    },
    maxFiles,
    multiple: multiple || maxFiles > 1,
    ...dropzoneProps,
  });

  return (
    <div
      {...getRootProps()}
      className="bg-gray-50 border-4 border-dashed border-gray-200 flex items-center justify-center px-5 py-10 rounded-lg"
      data-cy={testId}
    >
      <input {...getInputProps()} data-cy={"file-upload-input"} />
      <div className="flex flex-col items-center space-y-3">
        <UploadIcon
          className={cx("h-12 w-12", {
            "text-brand-navy": isDragActive,
            "text-brand-orange": !isDragActive,
          })}
        />
        {isDragActive ? (
          <p className="text-gray-700">Drop the file here</p>
        ) : (
          <>
            <p className="text-center text-gray-700">{instructionText}</p>
            <p className="text-center text-gray-700">or</p>
            <OutlineButton>{selectFileButtonText}</OutlineButton>
          </>
        )}

        <p className="text-center text-gray-400">
          Only {acceptedFileTypes.map((fileType) => `.${fileType}`).join(", ")} formats
          are supported
        </p>
        {errorContent}
      </div>
    </div>
  );
};
