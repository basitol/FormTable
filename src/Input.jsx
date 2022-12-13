import React from "react";

const Input = ({ label, value, onChange, type }) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <label htmlFor="name">{label}</label>
      <input
        type={type ? type : "text"}
        id={label}
        className="border border-gray-300 rounded-md h-10 px-2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
