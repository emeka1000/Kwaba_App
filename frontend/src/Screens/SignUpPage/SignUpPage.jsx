import React, { useState, useEffect, useCallback } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./SignUp.css";
import Image from "../../Components/img/welcomepage.jfif";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Loading from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const SignUpPage = (props) => {
  const history = useNavigate();
  const move = useCallback(
    (path) => {
      history(path);
    },
    [history]
  );

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message1, setMessage1] = useState(null);
  const [message2, setMessage2] = useState(null);
  const [message3, setMessage3] = useState(null);
  const [message4, setMessage4] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      move("/home");
    }
  }, [move, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage1("Passwords Do not Match");
    }
    if (!name) {
      setMessage3("Enter Fullname");
    }
    if (!email) {
      setMessage4("Enter Email Address");
    }
    if (!password) {
      setMessage2("Enter Password");
    } else {
      dispatch(register(name, email, password));
    }
    // if (!password) {
    //   setMessage("Please enter a password");
    //   else {

    //   }
    // }
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
          <Col xs={9} className="colcontrol">
            {loading && <Loading />}
            <br />
            {/* <img src={Image} className="image" alt="logo" /> */}
            <h1 className="h1">Sign Up!!!</h1>
            {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
            <Form className="cardform" onSubmit={submitHandler}>
              {message3 && (
                <ErrorMessage variant="danger">{message3}</ErrorMessage>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Fullname"
                  value={name}
                  className="areafield"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              {message4 && (
                <ErrorMessage variant="danger">{message4}</ErrorMessage>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  className="areafield"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              {message2 && (
                <ErrorMessage variant="danger">{message2}</ErrorMessage>
              )}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  className="areafield"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              {message1 && (
                <ErrorMessage variant="danger">{message1}</ErrorMessage>
              )}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={confirmpassword}
                  className="areafield"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <div className="buttonContainer">
                <Button variant="primary" type="submit" className="buttons">
                  Create Account
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUpPage;
