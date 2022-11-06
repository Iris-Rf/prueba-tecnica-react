import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import "./index.css";

import NotFound from "./pages/404";
import Inicio from "./pages/Inicio";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="series" element={<Series />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
