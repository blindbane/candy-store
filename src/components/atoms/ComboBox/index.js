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

export default () => (
  <Select
    closeMenuOnSelect={true}
    components={{ DropdownIndicator }}
    isMulti
    options={colourOptions}
  />
);
