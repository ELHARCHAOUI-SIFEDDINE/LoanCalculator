import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoanCalculator from "./components/LoanCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoanCalculator />
  </React.StrictMode>
);
