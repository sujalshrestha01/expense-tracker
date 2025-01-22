import { useState } from "react";
import { getTodayDate } from "./utils/dateUtils";

import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Header from "./components/Header";
import ExpenseData from "./ExpenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses", ExpenseData);
  const [pointerPosition, setPointerPosition] = useState({});

  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
    date: getTodayDate(),
  });
  const [editingRowID, setEditingRowID] = useLocalStorage("editingRowID", "");

  return (
    <>
      <Header />
      <div
        className="flex justify-around"
        onClick={() => {
          if (pointerPosition.left) {
            setPointerPosition({});
          }
        }}
      >
        <Form
          editingRowID={editingRowID}
          setEditingRowID={setEditingRowID}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
        />
        <Table
          setEditingRowID={setEditingRowID}
          setExpenses={setExpenses}
          expenses={expenses}
          pointerPosition={pointerPosition}
          setPointerPosition={setPointerPosition}
          setExpense={setExpense}
        />
      </div>
    </>
  );
}

export default App;
