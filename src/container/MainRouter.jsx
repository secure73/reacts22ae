import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Magic from "../pages/Magic";
import Layout from "../layout/Layout";

const MainRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/magic" exact element={<Magic />} />
      </Routes>
    </Layout>
  );
};
export default MainRouter;