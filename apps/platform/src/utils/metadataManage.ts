import axios from "axios";
import { pinata_api_key, pinata_secret_api_key } from "../configs/constants";

export const uploadArtToIPFS = async(file: File) => {
    let data:FormData = new FormData();
    data.append('file', file, file.name);
    try {
        const res = await axios.post(
            'https://api.pinata.cloud/pinning/pinFileToIPFS',
            data,
            {
                headers: { 
                    pinata_api_key,
                    pinata_secret_api_key,
                    "Content-Type": `multipart/form-data`
                },
            }
        );
        return res.data.IpfsHash;
    } catch(err) {
        return false;
    }
}

export const uploadMetadataToIPFS = async(metadata: Object) => {
    try {
        const res = await axios.post(
            'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            metadata,
            {
                headers: { 
                    pinata_api_key,
                    pinata_secret_api_key,
                },
            }
        );
        return res.data.IpfsHash;
    } catch(err) {
        return false;
    }
}