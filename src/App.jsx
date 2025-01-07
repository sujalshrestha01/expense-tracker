import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Header from "./components/Header";
import ExpenseData from "./ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData);
  const [pointerPosition, setPointerPosition] = useState({});

  return (
    <>
      <Header />
      <div
        className="flex justify-around"
        onClick={() => setPointerPosition({})}
      >
        <Form setExpenses={setExpenses} />
        <Table
          setExpenses={setExpenses}
          expenses={expenses}
          pointerPosition={pointerPosition}
          setPointerPosition={setPointerPosition}
        />
      </div>
    </>
  );
}

export default App;
