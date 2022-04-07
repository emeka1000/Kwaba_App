import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./Cards.css";

const Card = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form className="cardform">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* radio input */}
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <Button variant="primary" type="submit" className="button_two">
              Submit
            </Button>
            <Button variant="success" type="submit" className="button">
              Register
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Card;
