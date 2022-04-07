import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./finish.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import "../InfoPage/infoPage.css";

const Finish = () => {
  return (
    <Container className="cardcss">
      <div className="profinish">
        <div className="pbardivagree">
          <p className="pagenum">4/4</p>
          <Stack spacing={2} direction="row">
            <CircularProgress
              variant="determinate"
              value={100}
              style={{ color: "#00b74a" }}
            />
          </Stack>
        </div>
      </div>
      <div>
        <h1 className="hclass">Finished</h1>
        <p className="pclass">Welcome to Kwaba!</p>
      </div>
    </Container>
  );
};

export default Finish;
