import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import '../assets/css/App.css'; 
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <MainRouter />
  </BrowserRouter>
  );
}

export default App;
