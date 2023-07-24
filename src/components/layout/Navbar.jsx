import React from "react";
import NavItem from "./NavItem";
function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow p-10 space-x-5">
          <NavItem name="Home" to="/" />
          <NavItem name="Magics" to="./magic" />
          <NavItem name="products" to="./products" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
