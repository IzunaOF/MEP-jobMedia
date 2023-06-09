import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
