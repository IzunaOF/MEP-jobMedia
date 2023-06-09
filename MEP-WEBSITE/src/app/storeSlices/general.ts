import { createSlice } from "@reduxjs/toolkit";

type TGeneral = {
    search: string;
    searchResult: any;
};

const initialState: TGeneral = {
    search: "",
    searchResult: null,
};
const generalStore = createSlice({
    name: "general",
    initialState,
    reducers: {
        setSearch: (s, action) => {
            s.search = action.payload;
        },
    },
});

export const { setSearch } = generalStore.actions;

export default generalStore.reducer;
