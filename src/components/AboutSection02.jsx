import React from "react";

import about02 from "../assets/about02.png";

const AboutSection02 = () => {
  return (
    <div className="py-14">
      <h1 className="mx-14 text-3xl text-gray-800 font-semibold py-10">
        Our Values
      </h1>

      <div className="flex flex-wrap justify-center gap-14 mx-auto">
        <div className="flex w-[45%]">
          <img src={about02} alt="" className="w-[28%] h-fit my-auto" />

          <div>
            <h2 className="text-xl font-semibold">Trust</h2>
            <p className="text-lg">
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
        </div>

        <div className="flex w-[45%]">
          <img src={about02} alt="" className="w-[28%] h-fit my-auto" />

          <div>
            <h2 className="text-xl font-semibold">Trust</h2>
            <p className="text-lg">
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
        </div>

        <div className="flex w-[45%]">
          <img src={about02} alt="" className="w-[28%] h-fit my-auto" />

          <div>
            <h2 className="text-xl font-semibold">Trust</h2>
            <p className="text-lg">
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
        </div>

        <div className="flex w-[45%]">
          <img src={about02} alt="" className="w-[28%] h-fit my-auto" />

          <div>
            <h2 className="text-xl font-semibold">Trust</h2>
            <p className="text-lg">
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection02;
