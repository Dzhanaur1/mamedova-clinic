import React from "react";

const About = () => {
  return (
    <div className="bg-biege w-full  mt-[30px] md:mt-[50px]   overflow-hidden ">
      <div className="container ">
        <div className="flex lg:gap-[110px] lg:h-[600px] flex-col lg:flex-row py-[20px]">
          <img
            src="/about.jpg"
            className=" rounded-[10px] max-h-[450px] lg:max-h-none max-w-[443px] w-full object-cover"
            alt=""
          />
          <div className="max-w-[640px] pt-[20px] flex h-full flex-col lg:pt-[50px]">
            <h2 className="text-[29px] lg:text-[40px] font-bold mb-[10px] lg:mb-[20px]">
              Мамаева Наида Дагировна
            </h2>
            <p className="text-[13px] mb-[15px] lg:text-[14px]">
              Выполняет широкий спектр операций в области лица и тела различной
              категории сложности. Работает по принципу индивидуального подхода
              к каждому пациенту,
            </p>
            <ul className=" pl-7 md:my-[20px] list-disc">
              <li>Действительный член РОПРЭХ</li>
              <li>
                Член национальное общество реконструктивной микрохирургии (НОРМ)
              </li>
              <li>Член общества пластических хирургов (РОПРЕХ)</li>
              <li>
                Член международного общества эстетических пластических хирургов
                (International Society of Aesthetic Plastic Surgery).
              </li>
            </ul>

            <h3 className=" font-semibold my-[10px]">Образование</h3>
            <ul className="  pl-7 list-disc">
              <li>Специальность «Лечебное дело»</li>
              <li>
                Клиническая ординатура по специальности «Пластическая хирургия»
              </li>
              <li>Специализация «Хирургия»</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
