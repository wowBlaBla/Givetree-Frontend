import axios from "axios";
import { UploadFileValues } from "../components/UploadFile";
import { CLOUDINARY_API_KEY, CLOUDINARY_ENDPOINT } from "../configs/constants";

export const saveFile = async (values: UploadFileValues) => {
  const response = await axios
    .post(CLOUDINARY_ENDPOINT, {
      body: { file: values.fileName, api_key: CLOUDINARY_API_KEY },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => error);

  return response;
};
