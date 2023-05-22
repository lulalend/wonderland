import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "routes/MainPage";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "./theme.css";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />
    }
  ],
  {
    basename: process.env.PUBLIC_URL
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
