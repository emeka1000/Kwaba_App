import React from "react";
import { Container } from "react-bootstrap";
import "./agreedcss.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import "../InfoPage/infoPage.css";

const AgreementPage = () => {
  return (
    <Container className="cardlike">
      <div className="proagree">
        <div className="pbardivagree">
          <p className="pagenum">3/4</p>
          <Stack spacing={2} direction="row">
            <CircularProgress
              variant="determinate"
              value={75}
              style={{ color: "#00b74a" }}
            />
          </Stack>
        </div>
      </div>
      <div>
        <h1 className="h1agreed">Agreement</h1>
        <p className="p1agreed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
    </Container>
  );
};

export default AgreementPage;
