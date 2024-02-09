"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Title from "../Title";
import Link from "next/link";
import Slide from "./Slide";
const Gallery = () => {
  const slides = [
    {
      url: "/gallery/image.png",
      text: "Подтяжка лица, шеи. Липофилинг лица.",
    },
    {
      url: "/gallery/image-1.png",
      text: "Подтяжка лица, шеи. Липофилинг лица.",
    },
    {
      url: "/gallery/image-2.png",
      text: "Подтяжка лица, шеи. Липофилинг лица.",
    },
    {
      url: "/gallery/image-1.png",
      text: "Подтяжка лица, шеи. Липофилинг лица.",
    },
  ];
  return (
    <div
      id="works"
      className="container mt-[30px]  md:mt-[45px] lg:mt-[60px] flex flex-col"
    >
      <h3 className="text-[#000] lg:text-[34px]  text-[28px]">Наши работы</h3>
      <Link href="#" className=" underline">
        Смотреть больше работ→
      </Link>
      <div className="flex mt-4 w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15} // Отступ между слайдами
          slidesPerView={1.15}
          autoHeight={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1040: {
              slidesPerView: 3,
            },
          }} // Количество слайдов, видимых одновременно
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }} // Включение кнопок навигации (предыдущий/следующий)
        >
          {slides.map((obj) => (
            <SwiperSlide>
              <Slide {...obj} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-3 mt-3 justify-end ">
        <button className="prev w-[40px] h-[40px] rounded-full flex justify-center items-center bg-biege_600">
          <img className=" rotate-180" src="icons/Arrow.svg" alt="" />
        </button>
        <button className="next w-[40px] h-[40px] rounded-full flex justify-center items-center bg-biege_600 transition-all duration-200 ">
          <img src="icons/Arrow.svg" alt="" />
        </button>
      </div>
    </div>
    // <div className="container flex flex-col">
    //   <Title text="Наши работы" />
    //   <Link href="#">Смотреть больше работ→</Link>
    //   <Swiper
    //     spaceBetween={20} // Отступ между слайдами
    //     slidesPerView={2} // Количество слайдов, видимых одновременно
    //     navigation // Включение кнопок навигации (предыдущий/следующий)
    //   >
    //     {slides.map((obj) => (
    //       <SwiperSlide>
    //         <Slide {...obj} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default Gallery;
