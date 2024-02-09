import { link } from "fs";
import React from "react";
import Button from "./Button";

const Service = () => {
  const services = [
    {
      name: "Блефаропластика",
      options: [
        "Азиатских век",
        "Классическая блефаропластика",
        "Трансконъюнктивальная",
      ],
    },
    {
      name: "Хейлопластика",
      options: ["Кессельринг", "Булхорн", "Корнер-лифтинг", "Пластика губ VY"],
    },
    {
      name: "Лифтинг линг",
      options: [
        "Лифтинг лба",
        "SMAS-лифтинг",
        "Височный лифтинг",
        "Лифтинг шеи",
      ],
    },
    {
      name: "Маммопластика",
      options: [
        "Увеличение груди",
        "Уменьшение груди",
        "Все виды подтяжки груди",
        "Липофилинг груди",
      ],
    },
    {
      name: "Абдоминопластика",
      options: [
        "Абдоминопластика с перемещением пука",
        "Миниабдоминопластика",
        "Липоскульптура",
      ],
    },
    {
      name: "Липоскульптура",
      options: [
        "Липомоделирование тела",
        "Липосакция отдельных зон",
        "Липофилинг ягодиц",
        "Липофилинг груди",
      ],
    },
  ];

  return (
    <div id="service" className="mx-auto max-w-[950px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-3 gap-[20px]">
        {services.map((obj) => (
          <div
            key={obj.name}
            className="flex flex-col min-h-[220px] lg:min-h-[300px] items-center text-center justify-between"
          >
            <h3 className=" text-[24px] md:text-[28px] font-semibold text-black">
              {obj.name}
            </h3>
            <ul className="flex flex-col gap-[6px]">
              {obj.options.map((option) => (
                <li key={option} className=" text-[16px] md:text-[18px]">
                  {option}
                </li>
              ))}
            </ul>
            <Button
              text="Стоимость и консультация"
              className="rounded-[10px] border-biege_600 border bg-biege transition-all duration-[250ms] hover:text-white hover:bg-biege_600 py-[6px] md:py-[8px] px-[20px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
