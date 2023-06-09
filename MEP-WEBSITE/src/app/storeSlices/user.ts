import { createSlice } from "@reduxjs/toolkit";
import { search, useCreateAccount } from "../api";
type TAccount = {
    user: {
        firstName: string;
        lastName: string;
        image: string;
        cpf: string;
        email: string;
        password: string;
        birthday: string;
        phone: string;
        profile?: string;
    };

    adress: {
        country: string;
        state: string;
        city: string;
        neighbor: string;
        street: string;
        cep: string;
        number: string;
        complement: string;
    };
    bio: string;
};

const initialState: TAccount = {
    user: {
        firstName: "",
        lastName: "",
        image: "",
        cpf: "",
        email: "",
        password: "",
        birthday: "",
        phone: "",
        profile: "",
    },
    adress: {
        country: "",
        state: "",
        city: "",
        neighbor: "",
        street: "",
        cep: "",
        number: "",
        complement: "",
    },
    bio: "",
};
const account = createSlice({
    name: "account",
    initialState,
    reducers: {
        setName: (session, action) => {
            session.user.firstName = action.payload.firstName;
        },
        createAccount: (account) => {
            const res = useCreateAccount(account);
            console.log(res);
        },
    },
});

export const { setName, createAccount } = account.actions;
export default account.reducer;
