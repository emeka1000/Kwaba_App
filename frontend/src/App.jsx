import "./App.css";
import React from "react";
import HorizontalLinearStepper from "./StepperNav/StepperNav";
import LoginPage from "./Screens/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import WelcomePage from "./Screens/WelcomePage/WelcomePage";
import SignUpPage from "./Screens/SignUpPage/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route path="/" element={<WelcomePage />} exact />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="rent" element={<HorizontalLinearStepper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
