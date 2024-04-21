import React, { useState } from "react";
import { Link } from "react-router-dom";

// open
import { RiMenuUnfoldLine } from "react-icons/ri";

// close
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-0">
      <div className="flex justify-between items-center mx-5 lg:mx-10 h-14">
        <div className="flex items-center justify-center gap-5">
          <RiMenuUnfoldLine
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-green-700"
          />
          <h1 className="text-3xl text-green-600 font-bold">Ecoyaan</h1>
        </div>

        <ul className="md:flex justify-between item-center gap-10 text-xl font-semibold text-gray-700 hidden">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/about-us"}>
            <li>About Us</li>
          </Link>
        </ul>
      </div>

      <div
        className={`h-screen absolute top-0 z-10  w-[100%] flex ease-in-out duration-500 ${
          open ? "left-0" : "left-[-100%]"
        } transition-all`}
      >
        <div className="bg-green-50 w-[60%] h-screen  shadow-xl">
          <div className="flex flex-col gap-10 pt-10 mx-8">
            <Link to={"/"} className="flex justify-start gap-3 items-center ">
              <RiMenuFoldLine
                onClick={() => setOpen(false)}
                className="text-3xl text-green-700"
              />
              <h1 className="text-3xl text-green-600 font-bold">Ecoyaan</h1>
            </Link>

            <ul className="flex flex-col gap-5 text-xl" onClick={() => setOpen(false)}>
              <Link to={"/"}>
                <li>Home</li>
              </Link>

              <Link to={"/about-us"}>
                <li>About Us</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="w-[40%] h-screen" onClick={() => setOpen(false)}></div>
      </div>
    </div>
  );
};

export default Navbar;
