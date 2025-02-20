import "./CashFlow.css";
import { CashFlowModal } from "../cash-flow-modal/CashFlowModal";
import React from "react";

export function CashFlow() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  function handleClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <div className="cash-flow-head-wrapper">
        <h1 className="cash-flow-title">Cash Flow</h1>
        <div>
          <button className="cash-flow-form-button" onClick={handleClick}>
            Add new item
          </button>
        </div>
      </div>
      {isModalOpen === true && (
        <CashFlowModal onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}
