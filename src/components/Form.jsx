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
  const [error, setError] = useState('')
  const validate=(formData)=>{
    let errors={}
    if(!formData.title)
      errors.title='title is req'
    if(!formData.category)
      errors.category='category is req'
    if(!formData.amount)
      errors.amount='amount is req'
    setError(errors)
    return errors


  }
  const handleChange=(e)=>{
  
    const {name,value}=e.target
    setError((prev)=>({...prev,[name]:null}))
    setExpense((prev)=>({...prev,[name]:value,id:crypto.randomUUID()}))
  }
  // const handleInput=(e)=>{
  //   const key=e.target.name
  //   setError((prev)=>({...prev,[key]:null}))
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense = { title, category, amount, id: crypto.randomUUID() };
     const validateResult= validate(expense)
     console.log(validateResult)
     if(!Object.keys(validateResult).length){
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
        <div className="flex flex-col w-[300px] mb-5 relative">
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
          <p className="absolute left-0 -bottom-4 text-sm text-red-600">{error.title}</p>
        </div>
        <div className="flex relative flex-col w-[300px] mb-5">
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
          <p className="absolute left-0 -bottom-4 text-sm text-red-600">{error.category}</p>
        </div>
        <div className="flex relative flex-col w-[300px] mb-5">
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
          <p className="absolute left-0 -bottom-4 text-sm text-red-600">{error.amount}</p>
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
