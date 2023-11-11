import React from "react";
import { createRoot } from "react-dom/client";

import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";

const myElement: HTMLElement = document.getElementById("app")!;

const root = createRoot(myElement);
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
