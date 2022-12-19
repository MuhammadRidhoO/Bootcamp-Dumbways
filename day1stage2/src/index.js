import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./style.css";
import "./styleNavbarAfterLogin.css";
import "./styleDetail.css";
import "./styleHeader.css";
import "./styleCard.css";
import "./styleDetail.css";
import "./stylePaymentWaiting.css";
import "./stylePaymentWaitingYellow.css";
import "./stylePaymentAfterBuys.css";
import "./styleModalLogin.css";
import "./styleModalRegister.css";
import "./styleAdminTourTrip.css";
import "./stylePayMentApproveAdmin.css";
import "./styleAddTripAdmin.css";
import "./IncomingTransaction.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
