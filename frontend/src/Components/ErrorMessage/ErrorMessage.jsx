import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "warning", children }) => {
  return (
    <Alert
      variant={variant}
      style={{
        fontSize: 10,
        backgroundColor: "inherit",
        color: "black",
        marginTop: -30,
        marginBottom: -10,
        height: "20px",
      }}
    >
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;
