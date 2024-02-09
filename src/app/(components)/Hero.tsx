import Link from "next/link";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="  lg:bg-intro bg-mb_intro h-[100vh] lg:max-h-[800px] bg-no-repeat bg-cover ">
      <div className="container h-full bg-black bg-opacity-15 md:bg-transparent">
        <div className="flex flex-col h-full justify-center lg:pt-0  max-w-[485px] gap-[20px] text-white">
          <h1 className="text-[40px] font-semibold leading-tight">
            Пластический хирург в Дагестане
          </h1>
          <p>
            Каждый пациент уникален и каждому нужен индивидуальный подход,
            поэтому неотъемлемой частью получения желаемого результата и
            доверительных отношений является очная консультация, где мы с
            пациентом, будем подбирать наиболее оптимальный вариант решения
            поставленных задач.
          </p>
          <div>
            <Button
              className="py-[10px] px-[30px]  transition-all duration-[250ms] hover:text-[#fff] hover:bg-biege_600 bg-white md:py-[15px] md:px-[45px] rounded-[10px]  text-black font-bold"
              text="Заказать консультацию"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
