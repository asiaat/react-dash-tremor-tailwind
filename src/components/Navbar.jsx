import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="font-bold text-gray-300">Dynamic NFTs </h1>
      <div className="py-2">
        <NavLink to={''} title="Dashboard">
          Dashboard
          </NavLink>
      </div>
      <div className="py-2">
        <NavLink to={''} title="Dashboard">
          Community
          </NavLink>
      </div>
      
      <div className="py-2">
        <NavLink to={''} title="Dashboard">
          Docs
          </NavLink>
      </div>
      <div className="py-2">
        <NavLink to={''} title="Dashboard">
          About 
          </NavLink>
      </div>
      <div className="py-2">
        <TextInput icon={SearchIcon} placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
