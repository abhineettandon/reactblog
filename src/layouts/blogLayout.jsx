import React from "react";

import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import SideBar from "../components/Common/SideBar";

const BlogLayout = ({ title, children }) => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1 className="my-4">
            {title}
            <small />
          </h1>
          {children}
        </div>
        <div className="col-md-4">
          <SideBar />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default BlogLayout;
