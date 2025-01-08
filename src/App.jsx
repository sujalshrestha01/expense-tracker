import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Header from "./components/Header";
import ExpenseData from "./ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData);
  const [pointerPosition, setPointerPosition] = useState({});
  const [expense, setExpense] = useState({
      title: "",
      category: "",
      amount: "",
    });
  const [editingRowID, setEditingRowID] = useState('')

  return (
    <>
      <Header />
      <div
        className="flex justify-around"
        onClick={() => setPointerPosition({})}
      >
        <Form editingRowID={editingRowID} setEditingRowID={setEditingRowID} setExpenses={setExpenses} expense={expense} setExpense={setExpense} />
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
