import React from "react";

import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
