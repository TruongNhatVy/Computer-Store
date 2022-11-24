import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Routerslink from "./routes/Routers";
import RoutersAdmin from "./admin/routes/RoutersAdmin";
import RoutersClient from "./routes/Routers";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routerslink />
         {/* <RoutersAdmin /> */}
      </Provider>
    </>
  );
};

export default App;
