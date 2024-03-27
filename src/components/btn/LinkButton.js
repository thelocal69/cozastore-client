import React from "react";
import { Wraper } from "./Style";
import { Link } from "react-router-dom";
export const LinkBtn = (props) => {

  const { children, customClass = "", to = "#" } = props;

  return (
    <Wraper>
      <Link className={`btnStyle ${customClass}`} to={to}>
        {children}
      </Link>
    </Wraper>
  );
};
