import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import "./infocomp.css";
import { useDispatch, useSelector } from "react-redux";
import { createtransactionAction } from "../../actions/transactionAction";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const InfoComponents = (props) => {
  const [radioValue, setRadioValue] = useState();
  const [accommodation_status, setAccommodation_status] = useState();

  const dispatch = useDispatch();

  const transactionCreate = useSelector((state) => state.transactionCreate);
  const { loading, error, transaction } = transactionCreate;

  const radios = [
    { name: "Looking to renew my rent", value: "1" },
    { name: "Want to pay for a new place", value: "2" },
    { name: "I'm still searching", value: "3" },
  ];

  return (
    <>
      <ButtonGroup className="inputbox">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={accommodation_status === radio.value}
            onChange={(e) => setAccommodation_status(e.currentTarget.value)}
            className="fontstuff"
            style={{
              borderRadius: "10px",
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {/* <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup> */}
    </>
  );
};

export default InfoComponents;
