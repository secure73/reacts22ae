import React from "react";

import { NavLink, useLocation } from "react-router-dom";
function NavItem(props) {
    const location = useLocation().pathname;

  return (
    <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
      <NavLink to={props.to}>{props.name}</NavLink>
    </span>
  );
}

export default NavItem;
