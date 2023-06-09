import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type TSession = {
    profile: string;
    token: string;
};

const initialState: TSession = {
    profile: "poashjdp",
    token: "asojfasf687asf9687as6fasasçkhf",
};
const session = createSlice({
    name: "windowSession",
    initialState,
    reducers: {
        logout: (s, action) => {
            s.profile = "";
            s.profile = action.payload
        },
        login: (s, a) => {
            Promise.resolve(axios.post("http://localhost:3000/signIn", a.payload)).then(
                (res) => logout(res.data)
            );
        },
    },
});

export const { logout, login } = session.actions;
export default session.reducer;
