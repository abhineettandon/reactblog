import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar color="dark" dark expand="md">
    <div className="container">
      <NavbarBrand href="/">React Blog</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" active>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/services">
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/blog">
            Blog
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default Header;
