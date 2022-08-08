import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import MoviePage from "./components/MoviePage";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Watchlist from "./components/Watchlist";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:movieID" element={<MoviePage />} />
                <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
        </Provider>
    </BrowserRouter >
)