import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage2 = ({ variant = "warning", children }) => {
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
      }}
    >
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage2;
