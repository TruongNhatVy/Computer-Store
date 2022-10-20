import React from "react";

import { Route, Routes } from "react-router-dom";

import Homepage from "../../src/pages/Homepage";
import { NoMatch } from "../../src/pages/PageError";
import SignIn from "../../src/pages/SignIn";
import Product from "../../src/pages/Product";
import CateLog from "../../src/pages/CateLog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();
const Routerslink = () => {
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Homepage" element={<Homepage />} />
          <Route exact path="catelog/:id" element={<Product />} />
          <Route exact path="*" element={<NoMatch />} />
          <Route exact path="/catelog" element={<CateLog />} /> 
          <Route exact path="/SignIn" element={<SignIn />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default Routerslink;
