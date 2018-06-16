import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    <div className="container" style={{ minHeight: "calc(100vh - 176px)" }}>
      {children}
    </div>
    <Footer />
  </div>
);

export default DefaultLayout;
