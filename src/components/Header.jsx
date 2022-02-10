import React, { Fragment } from "react";
import articfox from "../assets/arcticfox.png";


const Header = () => {

  return (
    <Fragment>
      <nav className="flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="fill-current h-8 w-8 mr-2" src={articfox} alt="Logo" />
          <span className="font-semibold text-xl tracking-tight">
            News For Everything
          </span>
        </div>
        <div className="w-full block flex justify-end lg:flex lg:items-center lg:w-auto">
          <div className="text-sm ">
            <a
              href="#responsive-header"
              className="md:w-auto text-teal-200 hover:text-white mr-4"
            >
              Technology
            </a>
            <a
              href="#responsive-header"
              className="md:w-auto text-teal-200 hover:text-white mr-4"
            >
              Blockchain
            </a>
            <a
              href="#responsive-header"
              className="md:w-auto text-teal-200 hover:text-white"
            >
              E-Sports
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
