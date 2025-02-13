import DatePicker from "react-datepicker";
import "./CashFlowModal.css";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";

interface IProps {
  onCloseModal: () => void;
}

export interface FormData {
  date: string | null;
  type: "income" | "expense";
  category:
    | "food"
    | "clothes"
    | "fun"
    | "media"
    | "health"
    | "living"
    | "travel"
    | "uncategorized"
    | "salary";
  note: string | null;
  participant: string | null;
  amount: number | null;
}

export function CashFlowModal(props: IProps) {
  const [formData, setFormData] = React.useState<FormData>({
    date: null,
    type: "income",
    category: "uncategorized",
    note: null,
    amount: null,
    participant: null,
  });

  function handleChange(key: string, value: string | null) {
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    props.onCloseModal();
  }

  function handleCloseModal(e) {
    if (e.target.id === "cash-flow-modal-container") {
      props.onCloseModal();
    }
  }

  return (
    <div
      id="cash-flow-modal-container"
      className="cash-flow-modal-container"
      onClick={handleCloseModal}
    >
      <div className="cash-flow-modal">
        <h1>New cash flow item</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="cash-flow-form-label" htmlFor="date">
              Date:
            </label>
            <DatePicker
              id="date"
              className="cash-flow-datepicker"
              selected={formData.date ? new Date(formData.date) : new Date()}
              onChange={(date) =>
                handleChange("date", date?.toISOString().split("T")[0] || null)
              }
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <input
              type="radio"
              id="income"
              name="cashflow-type"
              value="income"
              checked={formData.type === "income"}
              onChange={() => handleChange("type", "income")}
            />
            <label className="cash-flow-form-label" htmlFor="income">
              income
            </label>

            <input
              type="radio"
              id="expense"
              name="cashflow-type"
              value="expense"
              checked={formData.type === "expense"}
              onChange={() => handleChange("type", "expense")}
            />
            <label className="cash-flow-form-label" htmlFor="expense">
              expense
            </label>
          </div>

          <div>
            <label className="cash-flow-form-label" htmlFor="category">
              Category:
            </label>
            <select
              className="cash-flow-form-dropdown"
              id="category"
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
            >
              <option value="uncategorized">uncategorized</option>
              <option value="food">food</option>
              <option value="clothes">clothes</option>
              <option value="fun">fun</option>
              <option value="media">media</option>
              <option value="health">health</option>
              <option value="living">living</option>
              <option value="travel">travel</option>
              <option value="salary">salary</option>
            </select>
          </div>

          <div>
            <label className="cash-flow-form-label" htmlFor="amount">
              Amount:
            </label>
            <input
              id="amount"
              type="number"
              min="0"
              value={formData.amount || 0}
              onChange={(e) => handleChange("amount", e.target.value)}
            ></input>
          </div>

          <div>
            <label className="cash-flow-form-label" htmlFor="participant">
              Participant:
            </label>
            <input
              id="participant"
              type="text"
              value={formData.participant || ""}
              onChange={(e) => handleChange("participant", e.target.value)}
            ></input>
          </div>

          <div>
            <label className="cash-flow-form-label" htmlFor="note">
              Note:
            </label>
            <textarea
              className="cash-flow-form-input"
              placeholder="-- Your input here --"
              id="notesInput"
              value={formData.note || ""}
              onChange={(e) => handleChange("note", e.target.value)}
            />
          </div>

          <div>
            <button className="cash-flow-form-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
