import React from "react";
import { createRoot } from "react-dom/client";
import GivePage from "./GivePage";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GivePage />
  </React.StrictMode>
);
