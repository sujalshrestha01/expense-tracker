import React from "react";
import { useState } from "react";

function Form({ setExpenses }) {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState({
    title:'',
    category:'',
    amount:'',
    id:crypto.randomUUID()
  })
  const handleChange=(e)=>{
    
    
    setExpense((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense = { title, category, amount, id: crypto.randomUUID() };
    if (expense.title && expense.amount && expense.category) {
      setExpenses((prev) => [...prev, expense]);
      setExpense({
        title:'',
        category:'',
        amount:''
      })
    }
   
    // let expense={...getFormData(e.target),id:crypto.randomUUID()}
    // if(expense.title && expense.amount)
    // setExpenses((prev)=>([...prev,expense]))
  };

  //  const getFormData=(form)=>{
  //   const formData=new FormData(form)
  //   const data={}
  //   for(const [key,value] of formData.entries()){
  //       data[key]=value
  //   }
  //   return data
  //  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col w-[300px]">
          <label htmlFor="title">Title</label>
          <input
            className="border border-black outline-none"
            type="text"
            name="title"
            id="title"
            value={expense.title}
            // onChange={(e) => setExpense((prev)=>({...prev,title:e.target.value}))}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[300px]">
          <label htmlFor="category">Category</label>
          <select
            className="border border-black outline-none"
            name="category"
            id=""
            value={expense.category}
            // onChange={(e) => setExpense((prev)=>({...prev,category:e.target.value}))}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="flex flex-col w-[300px]">
          <label htmlFor="amount">Amount</label>
          <input
            className="border border-black outline-none"
            type="number"
            name="amount"
            id="amount"
            value={expense.amount}
            // onChange={(e) => setExpense((prev)=>({...prev,amount:e.target.value}))}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="ADD"
          className=" bg-red-600 border border-black w-[300px] "
        />
      </form>
    </div>
  );
}

export default Form;
