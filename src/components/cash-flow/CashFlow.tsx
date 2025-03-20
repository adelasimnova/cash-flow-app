import "./CashFlow.css";
import { CashFlowModal } from "../cash-flow-modal/CashFlowModal";
import React from "react";
import { CashFlowItem } from "../../types/CashFlowItem";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";

const mock: CashFlowItem[] = [
  {
    id: crypto.randomUUID(),
    date: "2025-04-24",
    type: "income",
    category: "food",
    note: "",
    participant: "company name",
    amount: 1000,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-02-24",
    type: "income",
    category: "food",
    note: "",
    participant: "company name",
    amount: 1500,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-08-24",
    type: "income",
    category: "food",
    note: "",
    participant: "company name",
    amount: 1020,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-04-24",
    type: "expense",
    category: "clothes",
    note: "rifle",
    participant: "Mohito",
    amount: 678,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-05-24",
    type: "expense",
    category: "living",
    note: "",
    participant: "Ticketportal",
    amount: 745,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-08-24",
    type: "expense",
    category: "media",
    note: "",
    participant: "Netflix",
    amount: 1200,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-01-24",
    type: "expense",
    category: "clothes",
    note: "",
    participant: "Zara",
    amount: 567,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-11-24",
    type: "expense",
    category: "clothes",
    note: "",
    participant: "H&M",
    amount: 569,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-12-24",
    type: "expense",
    category: "fun",
    note: "",
    participant: "Cinemacity",
    amount: 678,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-09-24",
    type: "expense",
    category: "clothes",
    note: "",
    participant: "CROPP",
    amount: 806,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-07-24",
    type: "expense",
    category: "clothes",
    note: "",
    participant: "Reserved",
    amount: 988,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-01-24",
    type: "income",
    category: "salary",
    note: "1/2025",
    participant: "company name",
    amount: 678,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-03-24",
    type: "income",
    category: "salary",
    note: "3/2025",
    participant: "company name",
    amount: 1000,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-06-24",
    type: "income",
    category: "salary",
    note: "6/2025",
    participant: "company name",
    amount: 1100,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-12-24",
    type: "income",
    category: "salary",
    note: "",
    participant: "company name",
    amount: 1020,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-10-24",
    type: "income",
    category: "salary",
    note: "",
    participant: "company name",
    amount: 1200,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-07-24",
    type: "income",
    category: "salary",
    note: "",
    participant: "company name",
    amount: 240,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-02-24",
    type: "expense",
    category: "health",
    note: "",
    participant: "Mudr Margetakova",
    amount: 569,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-06-24",
    type: "expense",
    category: "living",
    note: "na obed",
    participant: "CSOB Obchodna",
    amount: 894,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-03-24",
    type: "expense",
    category: "food",
    note: "",
    participant: "McDonalds",
    amount: 670,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-10-24",
    type: "expense",
    category: "travel",
    note: "",
    participant: "ZSSK",
    amount: 405,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-09-24",
    type: "income",
    category: "salary",
    note: "",
    participant: "company name",
    amount: 1000,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-11-24",
    type: "income",
    category: "salary",
    note: "",
    participant: "company name",
    amount: 1283,
  },
  {
    id: crypto.randomUUID(),
    date: "2025-05-24",
    type: "income",
    category: "salary",
    note: "",
    participant: "company name",
    amount: 964,
  },
];

export function CashFlow() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<CashFlowItem[]>(mock);

  function handleAddCashFlowItem(item: CashFlowItem) {
    setItems((prev) => {
      return [...prev, item];
    });
  }

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
          <div className="cash-flow-item-container">
            <AutoSizer>
              {({ width }) => (
                <div className="cash-flow-table-tools">
                  <Table
                    className="cash-flow-table"
                    style={{ width: `${width - 100}px` }}
                    width={width - 100}
                    height={400}
                    headerHeight={50}
                    rowHeight={40}
                    rowCount={items.length}
                    rowGetter={({ index }) => items[index]}
                  >
                    <Column label="Date" dataKey="date" width={width / 6} />
                    <Column label="Type" dataKey="type" width={width / 6} />
                    <Column
                      label="Category"
                      dataKey="category"
                      width={width / 6}
                    />
                    <Column label="Amount" dataKey="amount" width={width / 6} />
                    <Column label="Note" dataKey="note" width={width / 6} />
                    <Column
                      label="Participant"
                      dataKey="participant"
                      width={width / 6}
                    />
                  </Table>
                </div>
              )}
            </AutoSizer>
          </div>
        </div>
      </div>
      {isModalOpen === true && (
        <CashFlowModal
          onCloseModal={handleCloseModal}
          onAddCashFlowItem={handleAddCashFlowItem}
        />
      )}
    </div>
  );
}
