import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {} from "react-bootstrap";
import { Container, Form, Card } from "react-bootstrap";
import InfoPage from "../Components/InfoPage/InfoPage";
import "../Components/CoundingInterest/interestindex.css";
import InfoComponents from "../Components/InfoPage/InfoComponents";
import "../Components/InfoPage/infoPage.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import CompoundingInterestPage from "../Components/CoundingInterest/CompoundingInterestPage";
import { Link, useNavigate } from "react-router-dom";
import "../Screens/HomePage/Home.css";
import AgreementPage from "../Components/AgreementPage/AgreementPage";
import Finish from "../Components/AgreementPage/Finish";
import "react-circular-progressbar/dist/styles.css";
import { createtransactionAction } from "../actions/transactionAction";
import ErrorMessage2 from "../Components/ErrorMessage/ErrorMessage2";
import ErrorMessage3 from "../Components/ErrorMessage/ErrorMessage3";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Payment Option", "Payment Breakdown", "Submit Request"];
}

export default function HorizontalLinearStepper(props) {
  const [loan_request, setLoan_request] = useState();
  const [monthly_salary, setMonthly_salary] = useState();
  const [monthly_plan, setMonthly_plan] = useState();
  const [mess1, setMess1] = useState();
  const [mess2, setMess2] = useState();
  const [mess3, setMess3] = useState();

  function getStepContent(step) {
    switch (step) {
      case 0:
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
            {mess1 && (
              <ErrorMessage2 variant="danger" className="rot">
                {mess1}
              </ErrorMessage2>
            )}
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
            {mess2 && (
              <ErrorMessage2 variant="danger" className="rot">
                {mess2}
              </ErrorMessage2>
            )}
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
            {mess3 && <ErrorMessage3 variant="danger">{mess3}</ErrorMessage3>}
          </Container>
        );
      case 1:
        return <CompoundingInterestPage />;
      case 2:
        return <AgreementPage />;
      default:
        return "Unknown step";
    }
  }
  const dispatch = useDispatch();

  const transactionCreate = useSelector((state) => state.transactionCreate);
  const { loading, error, transaction } = transactionCreate;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!loan_request) {
      setMess1("Enter Loan request amount");
    } else {
      dispatch(createtransactionAction(loan_request));
    }
    if (!monthly_salary) {
      setMess2("Enter your monthly Income");
    } else {
      dispatch(createtransactionAction(monthly_salary));
    }
    if (!monthly_plan) {
      setMess3("Choose your monthly plan");
    } else {
      dispatch(createtransactionAction(monthly_plan));
    }
    if (loan_request || monthly_salary || monthly_plan) {
      dispatch(handleNext);
    }
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useNavigate();

  const abc = useCallback(
    (path) => {
      history(path);
    },
    [history]
  );

  useEffect(() => {
    if (!userInfo) {
      abc("/");
    }
  }, [abc, userInfo]);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className="steppage">
      <h1 style={{ marginTop: "10px", marginLeft: "30px" }}>My Rent</h1>
      <Card className="stepcard">
        <div className={classes.root}>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  <Finish />
                </Typography>
                <Button
                  className="devops"
                  variant="contained"
                  color="primary"
                  id="buto"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    borderColor: "black",
                    justifyContent: "center",
                  }}
                >
                  <Link to={"/home"} className="button">
                    Home
                  </Link>
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div className="devops">
                  {/* <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button> */}
                  {isStepOptional(activeStep) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                      className={classes.button}
                    >
                      Skip
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={submitHandler}
                    className="lose"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      borderColor: "black",
                      justifyContent: "center",
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

// const StepperNav = () => {
//   return;
// };

// export default StepperNav;
