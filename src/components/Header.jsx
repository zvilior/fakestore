import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/">Categories</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/itemslist">Itemslist</Link>
      </li>
      <li>
        {" "}
        <Link to="/openitem">Openitem</Link>
      </li>
    </ul>
  );
}

export default Header;
