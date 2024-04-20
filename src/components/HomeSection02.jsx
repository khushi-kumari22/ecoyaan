import React from "react";

import Img01 from "../assets/Img01.png";

const HomeSection02 = () => {
  return (
    <div className="my-20">
      <div className="flex justify-around items-center my-14">
        <div className="flex flex-col gap-5 w-[45%]">
          <h1 className="text-3xl text-gray-700 font-bold">
            Join our community in creating a more sustainable future for
            everyone
          </h1>
          <p className="text-xl">
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products.
          </p>
          <p className="text-xl">
            Consider us your partner for all things sustainable. To keep you
            motivated on the journey, we will provide you with engaging
            information about climate change, the latest updates on climate
            policies and lifestyle tips that you can adopt to reduce your impact
            on the environment.
          </p>
        </div>

        <div className="w-[40%]">
          <img src={Img01} alt="" />
        </div>
      </div>

      <div className="flex justify-around items-center my-14">
        <div className="flex flex-col gap-5 w-[45%]">
          <h1 className="text-3xl text-gray-700 font-bold">
            Carefully curated Eco-friendly products
          </h1>
          <p className="text-xl">
            We believe that every purchase you make can have a positive impact
            on the planet and the future.
          </p>
          <p className="text-xl">
            Soon, we will be connecting you with eco-friendly and sustainable
            products that are carefully selected based on their environmental
            and social benefits.
          </p>
        </div>

        <div className="w-[40%]">
          <img src={Img01} alt="" />
        </div>
      </div>

      <div className="flex justify-around items-center my-14">
        <div className="flex flex-col gap-5 w-[45%]">
          <h1 className="text-3xl text-gray-700 font-bold">
            Join our community in creating a more sustainable future for
            everyone
          </h1>
          <p className="text-xl">
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products.
          </p>
          <p className="text-xl">
            Consider us your partner for all things sustainable. To keep you
            motivated on the journey, we will provide you with engaging
            information about climate change, the latest updates on climate
            policies and lifestyle tips that you can adopt to reduce your impact
            on the environment.
          </p>
        </div>

        <div className="w-[40%]">
          <img src={Img01} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection02;
