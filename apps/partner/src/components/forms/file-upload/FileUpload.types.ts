import { ReactNode } from "react";
import { DropzoneOptions } from "react-dropzone";

export enum ErrorCode {
  FileInvalidType = "file-invalid-type",
  FileTooLarge = "file-too-large",
  FileTooSmall = "file-too-small",
  TooManyFiles = "too-many-files",
}

export interface FileError {
  message: string;
  code: ErrorCode | string;
}

export interface FileRejection {
  file: File;
  errors: FileError[];
}

export interface HandleFileDropParams {
  acceptedFiles: File[];
  documentType: string;
  fileRejections: FileRejection[];
}

export const FILE_TYPE_EXTENSIONS = {
  gif: ".gif",
  jpeg: ".jpeg",
  jpg: ".jpeg",
  png: ".png",
};

export type FileUploadAcceptedFileTypes = keyof typeof FILE_TYPE_EXTENSIONS;

export interface FileUploadProps extends Omit<DropzoneOptions, "accept"> {
  acceptedFileTypes?: FileUploadAcceptedFileTypes[];
  errorContent?: ReactNode;
  instructionText?: string;
  selectFileButtonText?: string;
  testId?: string;
}
