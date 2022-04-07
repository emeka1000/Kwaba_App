import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../CoundingInterest/interestindex.css";
import InfoComponents from "./InfoComponents";
import "./infoPage.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";

const InfoPage = (props) => {
  const [loan_request, setLoan_request] = useState();
  const [monthly_salary, setMonthly_salary] = useState();
  const [monthly_plan, setMonthly_plan] = useState();

  return (
    <Container className="call">
      <div className="pro">
        <div className="headman">
          <h1 className="phoneheadman">Payment Option</h1>
        </div>
        <div className="pbardiv">
          <p className="pagenum">1/4</p>
          <Stack spacing={2} direction="row">
            <CircularProgress
              variant="determinate"
              value={25}
              style={{ color: "#00b74a" }}
            />
          </Stack>
        </div>
      </div>
      <h3 className="acstat">What's your accommodation status?</h3>
      <InfoComponents />
      <br />
      <p className="test1">How much is your rent request amount?</p>
      <Form.Control
        size="lg"
        type="number"
        placeholderSize="sm"
        className="inbox"
        value={loan_request}
        onChange={(e) => setLoan_request(e.target.value)}
      />
      <br />
      <p className="test">How much do you earn monthly</p>
      <Form.Control
        size="lg"
        type="number"
        placeholderSize="sm"
        className="inbox"
        value={monthly_salary}
        onChange={(e) => setMonthly_salary(e.target.value)}
      />
      <br />
      <p className="test">Choose a monthly plan</p>
      <Form.Select
        aria-label="Default select example"
        className="inputField inbox lionden"
        value={monthly_plan}
        onChange={(props) => setMonthly_plan(props.target.value)}
      >
        {/* <option >Duration</option> */}
        <option onClick={props.value} value="1">
          1 Month
        </option>
        <option value="2">2 Months</option>
        <option value="3">3 Months</option>
        <option value="4">4 Months</option>
        <option value="5">5 Months</option>
        <option value="6">6 Months</option>
        <option value="7">7 Months</option>
        <option value="8">8 Months</option>
        <option value="9">9 Months</option>
        <option value="10">10 Months</option>
        <option value="11">11 Months</option>
        <option value="12">12 Months</option>
      </Form.Select>
    </Container>
  );
};

export default InfoPage;
