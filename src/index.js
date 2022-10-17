import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <Banner />
        <App />
    </React.StrictMode>
);
