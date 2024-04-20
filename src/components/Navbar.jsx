import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg">
      <div className="flex justify-between items-center mx-10 h-14">
        <Link to={"/"}>
          <h1 className="text-3xl text-green-600 font-bold">Ecoyaan</h1>
        </Link>

        <ul className="flex justify-between item-center gap-10 text-xl font-semibold text-gray-700">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/about-us"}>
            <li>About Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
