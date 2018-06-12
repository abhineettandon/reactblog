import React from "react";
import Search from "../Cards/Search";
import Categories from "../Cards/Category";
import Widget from "../Cards/Widget";

const SideBar = () => (
  <div>
    <Search />
    <Categories />
    <Widget title="About">
      You can put anything you want inside of these side widgets. They are easy
      to use, and feature the new Bootstrap 4 card containers!
    </Widget>
  </div>
);

export default SideBar;
