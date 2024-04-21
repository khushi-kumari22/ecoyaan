import React from "react";
import AboutImg from "../assets/about01.png" 

const AboutSection01 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center h-screen bg-green-50">

      <div className="w-[90%] pt-16 lg:pt-0 lg:w-[60%] lg:px-14 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold text-gray-800">About Ecoyaan</h1>
        <p className="text-xl text-gray-600 ">
          At Ecoyaan, we are more than just a platform. Our goal is to build a
          community of eco-conscious people who share a common vision and
          passion for a more sustainable world.
        </p>
        <p className="text-xl text-gray-600 ">
          We recognize that sustainability is a journey (as the Sanskrit word
          “yaan” suggests). To keep you motivated on this journey, on our
          platform and our social media pages, you can find:
          <ul className="flex flex-col gap-2 ml-10 list-disc">
            <li>
              Tips and tricks to adopt a more eco-friendly and low-waste
              lifestyle Videos, posts, and
            </li>
            <li>
              quizzes on climate change and sustainability Events and pledges
              that
            </li>
            <li>invite you to adopt a more sustainable lifestyle</li>
          </ul>
        </p>
      
      </div>


      <div className="w-[90%] lg:w-[40%] lg:px-10">
        <img src={AboutImg} alt="" />
      </div>

    </div>
  );
};

export default AboutSection01;
