import React from "react";
import { createRoot } from "react-dom/client";
import { inject } from '@vercel/analytics'
import "./index.css";
import App from "app/app";

// Vercel Analytics
inject()

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
