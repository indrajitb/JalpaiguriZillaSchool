import { Storage } from "aws-amplify";

export const getPresignedUrl = async (key: string): Promise<string> => {

    const signedUrl = await Storage.get(key);
    return signedUrl.toString();
}

