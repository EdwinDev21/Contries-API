import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import CountryInf from "./routes/CountryInf.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/country-info",
    element: <CountryInf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
