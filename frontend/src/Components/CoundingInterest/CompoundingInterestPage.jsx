import React from "react";
import InterestComponent from "./InterestComponent";
import "./interestindex.css";
import { Container } from "react-bootstrap";
import "./comp.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import "../InfoPage/infoPage.css";

const CompoundingInterestPage = () => {
  return (
    <Container className="cardcssinfo">
      <div className="pro">
        <div className="headman">
          <h1 className="phoneheadman">Payment Breakdown</h1>
        </div>
        <div className="pbardiv">
          <p className="pagenum">2/4</p>
          <Stack spacing={2} direction="row">
            <CircularProgress
              variant="determinate"
              value={50}
              style={{ color: "#00b74a" }}
            />
          </Stack>
        </div>
      </div>
      <div>
        <InterestComponent />
      </div>
    </Container>
  );
};

export default CompoundingInterestPage;
