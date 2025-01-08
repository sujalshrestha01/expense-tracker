import React from "react";

function ContextMenu({
  setEditingRowID,
  pointerPosition,
  setPointerPosition,
  setExpenses,
  expenses,
  setExpense,
  rowId,
}) {
  return (
    <div
      style={{
        left: `${pointerPosition.left}px`,
        top: `${pointerPosition.top}px`,
      }}
      className={` ${
        pointerPosition.left ? "" : "hidden"
      }  absolute cursor-pointer border bg-slate-100 border-black`}
    >
      <div
        className="hover:bg-slate-300"
        onClick={() => {
          setPointerPosition({});
          setEditingRowID(true);
          const expenseToEdit = expenses.find(
            (expense) => expense.id === rowId
          );
          setExpense(expenseToEdit);
        }}
      >
        Edit
      </div>
      <div
        className="hover:bg-slate-300"
        onClick={() => {
          setExpenses((prev) => prev.filter((data) => data.id !== rowId));
          setPointerPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default ContextMenu;
