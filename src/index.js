import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SocialNetwork from "./components/SocialNetwork";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Navbar />
        <Banner />
        <App />
        <SocialNetwork />
        <Footer />
    </>
);
