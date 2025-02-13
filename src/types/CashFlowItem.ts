export interface CashFlowItem {
  id: string;
  date: string;
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
  note: string;
  participant: string;
  amount: number;
}
