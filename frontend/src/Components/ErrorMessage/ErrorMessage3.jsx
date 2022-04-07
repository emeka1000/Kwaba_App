import React from "react";
import { Alert } from "react-bootstrap";
import "./error.css";

const ErrorMessage3 = ({ variant = "warning", children }) => {
  let mediaMatch = "600px";
  return (
    <Alert
      variant={variant}
      style={{
        fontSize: 10,
        backgroundColor: "inherit",
        color: "black",
        marginTop: -19,
        marginLeft: 50,
        marginBottom: -20,
        height: "20px",
        display: mediaMatch ? "none" : "block",
      }}
    >
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage3;
