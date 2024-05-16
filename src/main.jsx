import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router.jsx"
import { RouterProvider } from "react-router-dom";
import { NameProvider } from "./contexts/name.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NameProvider>
    <RouterProvider router={router} />
    </NameProvider>
  </React.StrictMode>
);
