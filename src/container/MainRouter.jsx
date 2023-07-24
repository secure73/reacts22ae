import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Magic from "../pages/Magic";
import Layout from "../layout/Layout";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Users from "../pages/Users";

const MainRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/magic" element={<Magic />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/users" exact element={<Users />} />

      </Routes>
    </Layout>
  );
};
export default MainRouter;