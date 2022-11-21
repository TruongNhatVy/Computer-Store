import React from "react";
import { Route, Routes } from "react-router-dom";
import ContainerMainLayoutAdmin from "../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import "../../assets/css/argon.min.css";
import "../../assets/css/nucleo-icons.css";
import TestAdmin from "../pages/Test/TestAdmin";
import ManaAccount from "../pages/MangeAccount/MangeAccount";

const RoutersAdmin = ({ token, currentAccount, fetchCurrentAccount }) => {
  return (
    <>
      <ContainerMainLayoutAdmin>
        <Routes>
          <Route path="/admin/test" element={<TestAdmin />} />
          <Route path="/admin/account" element={<ManaAccount />} />
        </Routes>
      </ContainerMainLayoutAdmin>
    </>
  );
};

export default RoutersAdmin;
