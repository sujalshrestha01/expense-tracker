import React from "react";
import { useState } from "react";

function Table({expenses}) {
    const [selectedCategory, setSelectedCategory] = useState("")
    let handlefilterCategory=(e)=>{
        setSelectedCategory(e.target.value)
    }

    const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
    
    
    let total=filteredExpenses.reduce((acc,expense)=>(acc+Number(expense.amount)),0)
  return (
    <div>
      <table className="table-auto border-collapse border border-black">
        <thead>
        <tr className="border-black border">
          <th className="border-black border">Title</th>
          <th className="border-black border">
            <select className="outline-none" name="" id="" onChange={handlefilterCategory}>
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
        {filteredExpenses.map((expense)=>(
            
            <tr key={expense.id}>
                
                <td className="border-black border">{expense.title}</td>
                <td className="border-black border">{expense.category}</td>
                <td className="border-black border">{expense.amount} </td>
            </tr>
        ))}
         
        
        <tr>
            <td className="border-black border" colSpan={2}>Total</td>
            
            <td>{total}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
