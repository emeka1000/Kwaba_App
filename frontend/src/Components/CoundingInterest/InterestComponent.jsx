import React, { useState } from "react";
// import { render } from "react-dom";
// import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Form, Table, Button } from "react-bootstrap";
import "./interestindex.css";
import { useDispatch, useSelector } from "react-redux";
import { createtransactionAction } from "../../actions/transactionAction";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const InterestComponent = (props) => {
  const [amount, setAmount] = useState();
  const [months, setMonths] = useState();
  const [result, setResult] = useState();

  const dispatch = useDispatch();

  const transactionCreate = useSelector((state) => state.transactionCreate);
  const { loading, error, transaction } = transactionCreate;

  const calculate = () => {
    const percentage = (amount * 2) / 100;
    const result = (+amount + +percentage) / months;
    setResult(result);
  };

  const saveHandler = async (e) => {
    e.preventDefault();

    if (!amount || !result || !months) return;
    dispatch(createtransactionAction(amount, result, months));
  };

  return (
    <div className="Card">
      <form className="formcss">
        <br />
        <br />
        <Form.Control
          size="lg"
          type="number"
          value={amount}
          placeholderSize="sm"
          style={{ marginTop: "-20px", marginBottom: "-10px" }}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <p>Monthly Payment Plan</p>
        <Form.Select
          aria-label="Default select example"
          className="inputField"
          value={months}
          onChange={(props) => setMonths(props.target.value)}
          onClick={() => {
            calculate();
          }}
        >
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
        <div className="tab">
          <Table striped bordered hover variant="success" className="tab">
            <tbody className="tab">
              <tr>
                <td>Pre-approved amount</td>
                <td>₦ {amount}</td>
              </tr>
              <tr>
                <td>Monthly Payment</td>
                <td>₦ {result}</td>
              </tr>
              <tr>
                <td>Months</td>
                <td>{months}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-grid gap-2">
          <Button variant="success" size="lg" onClick={saveHandler}>
            Save
          </Button>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        </div>
      </form>
    </div>
  );
};

export default InterestComponent;
