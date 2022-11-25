import React from "react";

import { Route, Routes } from "react-router-dom";

import Homepage from "../../src/pages/Homepage";
import { NoMatch } from "../../src/pages/PageError";
import Form from "../pages/Form";
import Product from "../../src/pages/Product";
import CateLog from "../../src/pages/CateLog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Layout from "../components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ActivationEmail from "../components/Form/ActivationMail";
import History from "../pages/History";
const client = new QueryClient();

const RoutersClient = () => {
  return (
    <>
      <QueryClientProvider client={client}>
      <Layout>
        <Routes>
        
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Homepage" element={<Homepage />} />
          <Route exact path="catelog/:_id" element={<Product />} />
          <Route exact path="*" element={<NoMatch />} />
          <Route exact path="/catelog" element={<CateLog />} /> 
          <Route exact path="/SignIn" element={<Form />} />
          <Route exact path="/SignUp" element={<Form />} />
          <Route exact path="/account/activate/:activation_token" element={<ActivationEmail />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/history" element={<History />} />
        </Routes>
        </Layout>
        </QueryClientProvider>
    </>
  );
};

export default RoutersClient;
