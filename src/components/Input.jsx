import React from "react";

function Input({ type, label, id, name, value, onChange, error }) {
  return (
    <div className="flex flex-col w-[300px] mb-5 relative">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="border border-black outline-none"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <p className="absolute left-0 -bottom-4 text-sm text-red-600">{error}</p>
    </div>
  );
}

export default Input;
