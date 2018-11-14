import React from "react";

const TextInput = ({ id, value, handleChange, label }) => {
  return (
    <label htmlFor={id}>
      {label}
      <input name={id} type="text" value={value} onChange={handleChange} />
    </label>
  );
};

export default TextInput;
