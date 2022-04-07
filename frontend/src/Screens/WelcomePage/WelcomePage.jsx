import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image from "../../Components/img/welcomepage.jfif";
import "./WelcomePage.css";
import { Link } from "react-router-dom";
import Im from "../../Components/img/World.jpg";
import Header from "../../Components/Header/Header";
import FooterWel from "../../Components/Footer/FooterWel";

const WelcomePage = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <img src={image} className="imagewelcome" alt="logo" />
        <br />
        <div className="text-container">
          <p>
            We are Kwaba. A home financing platform for Africans. We are here to
            help renters or aspiring homeowners pay for their homes in flexible
            ways. We work tirelessly everyday to keep the roof over the heads of
            Africans. Join us on our journey as we make the future of home
            payment happen today.
          </p>
        </div>
        <br />
        <div className="buttonContainerWelcome">
          <div>
            <Button variant="primary" size="lg" className="butty hover-shadow">
              <Link to="/login" className="button buttonpic1">
                Login
              </Link>
            </Button>
          </div>
          <div>
            <Button
              variant="success"
              size="lg"
              className="button2 hover-shadow"
            >
              <Link to="/signup" className="button buttonpic2">
                SignUp
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <FooterWel />
    </div>
  );
};

export default WelcomePage;
