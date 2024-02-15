"use client";
import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const [isVisibleWrapper, setIsVisibleWrapper] = useState(true);
  const [isVisibleText, setIsVisibleText] = useState(true);
  useEffect(() => {
    const timerWrapper = setTimeout(() => {
      setIsVisibleWrapper(false);
    }, 1400);
    const timerText = setTimeout(() => {
      setIsVisibleText(false);
    }, 1000);
    return () => clearTimeout(timerWrapper);
  }, []);
  return (
    <div
      className={` ${
        isVisibleWrapper ? "" : " translate-y-[-100%]"
      } transition-all duration-1000 z-[999] flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-biege`}
    >
      <img
        src="icons/logo-preintro.svg"
        alt=""
        className={` ${isVisibleText ? "" : " opacity-0"} transition-all`}
      />
      <div
        className={`flex flex-col justify-center items-center text-center text-biege_600 ${
          isVisibleText ? "" : " opacity-0"
        } transition-all`}
      >
        <h2 className=" text-4xl font-semibold">Мамаева Наида Дагировна </h2>
        <h3 className="">Пластический хирург</h3>
      </div>
    </div>
  );
};

export default PreLoader;
