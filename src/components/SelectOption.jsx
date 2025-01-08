import React from "react";

function SelectOption({ label, id, name, value, onChange, options, defaultOption, error }) {
  return (
    <div className="flex relative flex-col w-[300px] mb-5">
      <label htmlFor="category">{label}</label>
      <select
        className="border border-black outline-none"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      >
       {defaultOption && <option value={defaultOption} hidden>{defaultOption}</option>}
        {options.map((option,index) => (
          <option key={crypto.randomUUID()}  value={option} >{option}</option>
        ))}
      </select>
      <p className="absolute left-0 -bottom-4 text-sm text-red-600">{error}</p>
    </div>
  );
}

export default SelectOption;
