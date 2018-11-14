import React from "react";
import Select, { components } from "react-select";
import colourOptions from "./data";
import Icon from "../Icon";

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon />
      </components.DropdownIndicator>
    )
  );
};

export default ({ id, handleChange }) => (
  <Select
    name={id}
    components={{ DropdownIndicator }}
    options={colourOptions}
    closeMenuOnSelect={false}
    isMulti
    onChange={handleChange}
  />
);
