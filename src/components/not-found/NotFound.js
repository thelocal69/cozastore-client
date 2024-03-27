import React from "react";
import { Link } from "react-router-dom";
import { EMPTY } from "./Style";

const NotFound = () => {
  return (
    <>
      <EMPTY className="container">
        <span>Hello</span>
        <div>Thank You For Visiting Coza Store </div>
        <div>URL not found ! please come back to home !</div>

        <div>
          If you want to contact us, please
          <Link to="/Contact"> {""}click here </Link>
        </div>
        <div> We are here to serve you with love</div>
        <div>We wish you a pleasant shopping</div>
      </EMPTY>
    </>
  );
};

export default NotFound;
