import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Banner from "./components/Banner";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Disclaimer />
        <Navbar />
        <Banner />
        <App />
        <Footer />
    </>
);
