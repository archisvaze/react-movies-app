import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import MoviePage from "./components/MoviePage";

import App from "./components/App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:movieID" element={<MoviePage />} />
        </Routes>
    </BrowserRouter >
)