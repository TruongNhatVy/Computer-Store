import React from "react";

import { Route, Routes } from "react-router-dom";

import Homepage from "../../src/pages/Homepage";
import { NoMatch } from "../../src/pages/PageError";
import SignIn from "../../src/pages/SignIn";
import SignUp from "../../src/pages/SignUp";
import Product from "../../src/pages/Product";
import CateLog from "../../src/pages/CateLog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Layout from "../components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TestAdmin from "../admin/pages/Test/TestAdmin";
import ManageAccount from "../admin/pages/ManageAccount/ManageAccount";
import ManageProduct from "../admin/pages/ManageProduct/ManageProduct";
import ManageBrand from "../admin/pages/ManageBrand/ManageBrand";
import ManageCategory from "../admin/pages/ManageCategory/ManageCategory";
import ManageOrder from "../admin/pages/ManageOrder/ManageOrder";
import ManageReceipt from "../admin/pages/ManageReceipt/ManageReceipt";
import ManageSupplier from "../admin/pages/ManageSupplier/ManageSupplier";
// import ManageStatistic from "../admin/pages/ManageSupplier/ManageStatistic";

const client = new QueryClient();

const Routerslink = () => {
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          {/* -------------------Client------------------- */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="catelog/:CategoryId/:_id" element={<Product />} />
          <Route exact path="*" element={<NoMatch />} />
          <Route exact path="/catelog" element={<CateLog />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* -------------------Admin------------------- */}
          <Route path="/admin/" element={<TestAdmin />} />
          <Route path="/admin/account" element={<ManageAccount />} />
          <Route path="/admin/product" element={<ManageProduct />} />
          <Route path="/admin/brand" element={<ManageBrand />} />
          <Route path="/admin/category" element={<ManageCategory />} />
          <Route path="/admin/order" element={<ManageOrder />} />
          <Route path="/admin/receipt" element={<ManageReceipt />} />
          <Route path="/admin/supplier" element={<ManageSupplier />} />
          {/* <Route path="/admin/statistic" element={<ManageStatistic />} /> */}
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default Routerslink;
