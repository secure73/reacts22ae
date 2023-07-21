import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import Layout from "../layout/Layout";

const MainRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Layout>
  );
};
