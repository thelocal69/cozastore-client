import React from "react";
import { Wraper } from "./Style";

import CircularProgress from "@mui/material/CircularProgress";

const Button = (props) => {

  const {
    type = "button",
    value = "Click ",
    customClass = "",
    onClick,
    disabled = false,
    to = "#",
  } = props;

  return (
    <Wraper>
      {disabled ? (
        <CircularProgress></CircularProgress>
      ) : (
        <input
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={`btnStyle ${customClass}`}
          value={value}
        />
      )}
    </Wraper>
  );
};

export default Button;