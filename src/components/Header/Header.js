import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./Header.css"

const Header = () => {
  return (
    <header>
      <Navbar className="nav-bg" variant="dark">
        <Container>
          <Navbar.Brand href="/">FC Market</Navbar.Brand>
          <Nav>
            <Nav.Link href="/cart">سبد خرید</Nav.Link>
            <Nav.Link href="/account">حساب کاربری</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
