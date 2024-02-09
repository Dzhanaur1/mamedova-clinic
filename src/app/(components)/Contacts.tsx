"use client";
import React, { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Пожалуйста, заполните все поля формы.");
      return;
    }
    sendToTelegram();
    sendToWhatsApp();
    setName("");
    setPhone("");
    setError("");
  };

  const sendToTelegram = () => {
    // Здесь ваш код для отправки данных на Telegram
    console.log("Отправка на Telegram:", { name, phone });
  };

  const sendToWhatsApp = () => {
    // Здесь ваш код для отправки данных на WhatsApp
    console.log("Отправка на WhatsApp:", { name, phone });
  };

  return (
    <div className=" my-[30px] py-4 mx-3 md:my-[50px] bg-biege_600 lg:w-[1200px] md:mx-auto lg:h-[300px] rounded-[20px] flex flex-col justify-center items-center">
      <h1 className="font-bold text-[28px] md:text-4xl text-center text-white">
        Хотите заказать консультацию?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-6 md:mt-8 w-full px-4 gap-3 flex flex-col lg:flex-row justify-center items-center"
      >
        <div className="relative w-full max-w-[550px] flex">
          <input
            type="text"
            placeholder="Введите свое имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full w-full h-[40px]  lg:h-[55px] bg-white px-6 "
          />
        </div>

        <div className="relative w-full max-w-[550px] flex">
          <input
            type="tel"
            placeholder="Введите свой телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-full  w-full h-[40px]  lg:h-[55px] bg-white px-6 "
          />
          <button
            type="submit"
            className=" font-sans hover:translate-x-[3px] hover:bg-[] transition-all absolute top-1/2 translate-y-[-50%] rounded-full bg-biege_600 w-[34px] h-[34px] md:w-[44px] md:h-[44px] flex justify-center items-center right-[20px]"
          >
            <svg
              className="  "
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9091 6L1 6M7.13636 11L11.9091 6L7.13636 1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Contacts;
