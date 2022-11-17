import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
// import { userLogin } from "../../features/user/userSlice";
import Logout from "../Logout/Logout";

function NavBar() {
  const { loggedIn } = useSelector((state) => state.user);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Blog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Feed</Nav.Link>
          <Nav.Link href="/protected">Protected</Nav.Link>
          {loggedIn ? <Logout /> : <Nav.Link href="/login">Login</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
