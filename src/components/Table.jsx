import React from "react";
import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

function Table({
  setEditingRowID,
  expenses,
  setExpenses,
  setExpense,
  pointerPosition,
  setPointerPosition,
}) {
  const [rowId, setRowId] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("")
  // let handlefilterCategory=(e)=>{
  //     setSelectedCategory(e.target.value)
  // }

  // const filteredExpenses = selectedCategory
  // ? expenses.filter((expense) => expense.category.includes(selectedCategory))
  // : expenses;

  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);

  let total = filteredData.reduce(
    (acc, expense) => acc + Number(expense.amount),
    0
  );
  return (
    <div>
      <ContextMenu
        setEditingRowID={setEditingRowID}
        expenses={expenses}
        setExpense={setExpense}
        setExpenses={setExpenses}
        pointerPosition={pointerPosition}
        setPointerPosition={setPointerPosition}
        rowId={rowId}
      />
      <table className="table-auto border-collapse border border-black">
        <thead>
          <tr className="border-black border">
            <th className="border-black border">Title</th>
            <th className="border-black border">
              <select
                className="outline-none"
                name=""
                id=""
                onChange={(e) => setQuery(e.target.value)}
              >
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="border-black">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((expense) => {
            return (
              <tr
                key={expense.id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setRowId(expense.id);
                  setPointerPosition({
                    left: e.clientX + 5,
                    top: e.clientY + 5,
                  });
                }}
              >
                <td className="border-black border">{expense.title}</td>
                <td className="border-black border">{expense.category}</td>
                <td className="border-black border">{expense.amount} </td>
              </tr>
            );
          })}

          <tr>
            <td className="border-black border" colSpan={2}>
              Total
            </td>

            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
