"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

interface Props {}

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find Book or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experiences with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          btnType="button"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
