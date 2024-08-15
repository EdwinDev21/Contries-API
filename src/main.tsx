import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/Root";
import CountryInf from "./routes/CountryInf";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/country-info" element={<CountryInf />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </ChakraProvider>
);
