import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Result from "./result";

const basePath = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basePath}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </BrowserRouter>
);
