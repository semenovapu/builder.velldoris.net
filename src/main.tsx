import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import { BrowserRouter } from "react-router-dom";
import "./vendor/fonts/fonts.scss";
import "./vendor/reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>
);

/* здесь есть удаленные строки

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

*/