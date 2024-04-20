import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-around gap-96 mt-8">
        <div className=" flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 border-2 border-green-400 rounded-full"
          />
          <p className="text-2xl font-semibold text-amber-400">PULSEPLATES</p>
        </div>
        <div>
          <button className="text-xl font-medium text-amber-400">
            Cart ()
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
