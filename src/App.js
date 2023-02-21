import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
