// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ import
import App from "./App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ wrap App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
