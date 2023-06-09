import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./storeSlices/session";
import accountReducer from './storeSlices/user'
import generalReducer from "./storeSlices/general";
const store = configureStore({
    reducer: {
        useSession: sessionReducer,
        account: accountReducer,
        app: generalReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type TAccount = ReturnType<typeof accountReducer>
export default store;
