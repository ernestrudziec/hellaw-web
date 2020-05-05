import React from "react";
import StyledInput from "./StyledComponents/StyledInput/StyledInput";

const Input = (props) => {
  return (
    <StyledInput>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChangeValue}
      />
    </StyledInput>
  );
};

export default Input;
