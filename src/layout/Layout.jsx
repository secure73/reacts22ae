import React, { Fragment } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
//{children} tell React that this component is host or parent to any and many components
export default function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minheight: "75vh" }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
