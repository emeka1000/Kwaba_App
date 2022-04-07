import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Header/Header.css";

const Footer = () => {
  return (
    <div className="footerbg">
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center">
          © 2020 Copyright:
          <a href="https://github.com/emeka1000"> Kwaba Team.</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
