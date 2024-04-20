import React from "react";
import { Link } from "react-router-dom";

const HomeSection01 = () => {
  return (
    <div className="h-screen home-bg flex items-center">
      <div className="mx-28">
        <h1 className="text-3xl font-bold text-gray-800">Buy Less, Buy Better!</h1>
        <p className="text-xl my-3">Authentic source of truth for your sustainability needs</p>

        <Link to={"/about-us"}>
          <button className="bg-green-600 px-6 py-3 rounded-xl text-white text-xl">About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSection01;
