import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../img/headerpng.png";
import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Navbar className="headerbg">
      <Container className="container">
        <Navbar.Brand href="#home">
          <Link to={"/"}>
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Kwaba logo"
            />
          </Link>
          <div className="headtext">
            <strong>Kwaba App</strong>
          </div>
        </Navbar.Brand>
        <Nav>
          {/* <Nav.Link href="#" className="profile">
            <strong>User:</strong> <strong>{userInfo.name}</strong>
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
