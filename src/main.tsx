import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CashFlow } from "./components/cash-flow/CashFlow";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CashFlow />
  </React.StrictMode>,
);
