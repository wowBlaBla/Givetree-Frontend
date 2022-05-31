import React, { ChangeEvent, FC, useState } from "react";
import { Field, Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";

import { OutlineButton } from "./OutlineButton";
import { saveFile } from "../api/cloudinary";
import { CLOUDINARY_PRESET } from "../configs/constants";

const ACCEPTED_FILE_TYPES = ["image/png, image/jpg, image/gif, image/jpeg"];

interface UploadFileProps {
  label: string;
  fileName?: string | null;
}

export interface UploadFileValues {
  fileName: string;
  label: string;
  uploadPreset: string;
}

export const InnerUploadFile: FC<FormikProps<UploadFileValues>> = ({
  values,
  setFieldValue,
}) => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>();
  const [uploadData, setUploadData] = useState();

  const handleFileOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = (onLoadEvent) => {
      const result = onLoadEvent.target ? onLoadEvent.target.result : null;
      setImageSrc(result);
      setUploadData(undefined);
    };

    if (event.target.files) {
      reader.readAsDataURL(event.target.files[0]);
    }

    console.log("source", imageSrc);

    setFieldValue("fileName", event.target.value);
  };

  return (
    <Form>
      <label htmlFor="fileName">{}</label>
      <div className="relative mt-4">
        <Field
          accept={ACCEPTED_FILE_TYPES}
          name="fileName"
          type="file"
          onChange={handleFileOnChange}
          value={values.fileName}
        />

        {imageSrc && !uploadData && (
          <OutlineButton type="submit">Upload File</OutlineButton>
        )}
      </div>
    </Form>
  );
};

export const UploadFile = withFormik<UploadFileProps, UploadFileValues>({
  handleSubmit: async (values) => {
    await saveFile(values);
  },
  mapPropsToValues: ({ fileName, label }) => ({
    fileName: fileName || "",
    label: label || "",
    uploadPreset: CLOUDINARY_PRESET || "",
  }),
  validationSchema: yup.object().shape({
    fileName: yup.string(),
    uploadPreset: yup.string(),
  }),
})(InnerUploadFile);
