import axios from "axios";
import { TAccount } from "../store";

export async function search(line: string) {
    const abc = await Promise.resolve((await axios.get(`http://localhost:3000/search/${line}`)).data);
    console.log(abc);
    return abc;
}

const api = "http://localhost:3000";

export const useCreateAccount = async (params: TAccount) => {
    await axios.post(`${api}/createAccount`, {
        bio: params.bio,
        user: params.user,
        adress: params.adress,
    });
};

export const useSearchUser = (line: string) => {
    return axios.get(`${api}/search/${line}`);
};
