import React from "react";

function Form({setExpenses}) {
   
   const handleSubmit=(e)=>{
    e.preventDefault()
    let expense={...getFormData(e.target),id:crypto.randomUUID()}
    if(expense.title && expense.amount)
    setExpenses((prev)=>([...prev,expense]))
    
   }

   const getFormData=(form)=>{
    const formData=new FormData(form)
    const data={}
    for(const [key,value] of formData.entries()){
        data[key]=value
    }
    return data
   }


    
  return (
    <div>
      <form action=""  onSubmit={handleSubmit} >
        <div className="flex flex-col w-[300px]">
            <label htmlFor="title">Title</label>
            <input className="border border-black outline-none" type="text" name="title" id="title" />
        </div>
        <div className="flex flex-col w-[300px]" >
            <label htmlFor="category">Category</label>
            <select className="border border-black outline-none" name="category" id="" >
              <option  value="grocery">Grocery</option>
              <option  value="clothes">Clothes</option>
              <option  value="bills">Bills</option>
              <option  value="education">Education</option>
              <option  value="medicine">Medicine</option>
            </select>
        </div>
        <div className="flex flex-col w-[300px]">
            <label htmlFor="amount">Amount</label>
            <input className="border border-black outline-none" type="number" name="amount" id="amount" />
        </div>
        <input type="submit" value="ADD" className=" bg-red-600 border border-black w-[300px] " />
      </form>
    </div>
  );
}

export default Form;
