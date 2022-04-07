import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import Image from "../../Components/img/welcomepage.jfif";
import Loading from "../../Components/Loading/Loading";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useCallback } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const LoginPage = (props) => {
  const history = useNavigate();

  const abc = useCallback(
    (path) => {
      history(path);
    },
    [history]
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      abc("/home");
    }
  }, [abc, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };
  return (
    <div className="main">
      <Header />
      <Container fluid style={{ height: "100%", width: "100%" }}>
        <Row style={{ height: "100%", width: "100%" }}>
          <Col
            style={{
              backgroundImage: "linear-gradient(to right, #009933, #00cc00)",
            }}
          ></Col>
          <Col xs={9} className="colcontrollog">
            {loading && <Loading />}
            {/* <img src={Image} className="imagelog" alt="logo" /> */}
            <h1 className="h1log">Login</h1>
            <Form className="cardform" onSubmit={submitHandler}>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="areafield"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="areafield"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <div className="buttonContainer">
                <Button variant="primary" type="submit" className="buttons">
                  LoGin
                </Button>
              </div>
            </Form>
            <Col>
              New at Kwaba ? <Link to="/signup">SignUp!</Link>
            </Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginPage;
