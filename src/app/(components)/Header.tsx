"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const openMenu = () => {
  //   setIsOpen(true);
  //   document.body.style.overflow = "hidden";
  // };

  // const closeMenu = () => {
  //   setIsOpen(false);
  //   document.body.style.overflow = "auto";
  // };

  return (
    <React.Fragment>
      <header className="flex-[0_0_auto] absolute w-full pt-2 ">
        <div className="container flex max-h-[94px] items-center">
          <ul className="flex-1 hidden md:flex uppercase justify-between text-white">
            <li className="hover:text-biege_600 transition-all duration-200">
              <Link href="#">о докторе</Link>
            </li>
            <li className="hover:text-biege_600 transition-all duration-200">
              <Link href="#">Услуги</Link>
            </li>
            <li className="hover:text-biege_600 transition-all duration-200">
              <Link href="#">Работы</Link>
            </li>
            <li className="hover:text-biege_600 transition-all duration-200">
              <Link href="#">Контакты</Link>
            </li>
          </ul>
          <div className="flex flex-1 md:justify-center">
            <img
              className="max-h-[60px] md:max-h-[90px] w-auto"
              src="icons/logo-header.svg"
              alt=""
            />
          </div>

          <div className="flex-1  hidden md:flex justify-end">
            <div>
              <Button
                text="Консультация"
                className=" transition-all duration-[250ms] hover:text-[#fff] hover:bg-biege_600   bg-white md:py-[10px] md:px-[45px] rounded-[10px] leading-none  text-black font-bold"
              />
            </div>
          </div>
          {/* Бургер кнопка */}
          <div className="flex-1 flex md:hidden justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4  text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed  md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        } top-0 left-0 w-full  h-full bg-biege  transition-all duration-300`}
      >
        <div className="flex w-full h-full relative justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute w-7 h-7 flex  top-8 right-5 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#D6B886"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-5">
            <img
              className="flex-1 max-h-[90px] w-auto"
              src="icons/logo-black.png"
              alt=""
            />
            <ul className="flex-1 flex-col flex uppercase justify-between gap-5 text-black font-bold items-center">
              <li className="hover:text-biege_600 transition-all duration-200">
                <Link href="#">о докторе</Link>
              </li>
              <li className="hover:text-biege_600 transition-all duration-200">
                <Link href="#">Услуги</Link>
              </li>
              <li className="hover:text-biege_600 transition-all duration-200">
                <Link href="#">Работы</Link>
              </li>
              <li className="hover:text-biege_600 transition-all duration-200">
                <Link href="#">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
