import React from "react";
import { useState } from "react";
import Input from "./Input";
import SelectOption from "./SelectOption";
import { getTodayDate } from "../utils/dateUtils";

function Form({
  setExpenses,
  expense,
  setExpense,
  editingRowID,
  setEditingRowID,
}) {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const validationConfig = {
    title: [{ required: true, message: "title is req" }],
    category: [{ required: true, message: "category is req" }],
    amount: [
      { required: true, message: "amount is req" },
      { pattern: /^\d+(\.\d+)?$/, message: "enter valid number" },
      { positiveValue: true, message: "enter positive value" },
      // { number: true, message: "enter a number" },
    ],
    date: [],
    id: [],
  };
  const validate = (formData) => {
    let errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].forEach((rule) => {
        if (rule.required && !value) {
          errors[key] = rule.message;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errors[key] = rule.message;
        }

        if (rule.positiveValue && value < 0) {
          errors[key] = rule.message;
        }
        // if (rule.number && isNaN(value)) {
        //   errors[key] = rule.message;
        // }
      });
    });
    // if (!formData.title) errors.title = "title is req";
    // if (!formData.category) errors.category = "category is req";
    // if (!formData.amount) errors.amount = "amount is req";

    setError(errors);
    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError((prev) => ({ ...prev, [name]: null }));
    setExpense((prev) => ({ ...prev, [name]: value, id: crypto.randomUUID() }));
  };
  // const handleInput=(e)=>{
  //   const key=e.target.name
  //   setError((prev)=>({...prev,[key]:null}))
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;
    if (editingRowID) {
      setExpenses((prev) =>
        prev.map((expenseEle) =>
          expenseEle.id === editingRowID
            ? { ...expense, id: editingRowID }
            : expenseEle
        )
      );
      setEditingRowID("");
    } else {
      setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    }

    setExpense({
      title: "",
      category: "",
      amount: "",
      date: getTodayDate(),
    });
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
        {/* <div className="flex flex-col w-[300px] mb-5 relative">
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
          <p className="absolute left-0 -bottom-4 text-sm text-red-600">
            {error.title}
          </p>
        </div> */}
        <Input
          type="text"
          label="Title"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          error={error.title}
        />
        {/* <div className="flex relative flex-col w-[300px] mb-5">
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
          <p className="absolute left-0 -bottom-4 text-sm text-red-600">
            {error.category}
          </p>
        </div> */}
        <SelectOption
          label="category"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          error={error.category}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultOption="Select Category"
        />

        {/* <div className="flex relative flex-col w-[300px] mb-5">
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
          <p className="absolute left-0 -bottom-4 text-sm text-red-600">
            {error.amount}
          </p>
        </div> */}
        <Input
          type="text"
          label="amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          error={error.amount}
        />
        <Input
          type="date"
          label="date"
          id="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          error={error.date}
        />
        <input
          type="submit"
          value={`${editingRowID ? "SAVE" : "ADD"}`}
          className=" bg-red-600 border border-black w-[300px] "
        />
      </form>
    </div>
  );
}

export default Form;
