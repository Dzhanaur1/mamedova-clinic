import Link from "next/link";
import React, { FC } from "react";

type SlideType = {
  url: string;
  text: string;
};
const Slide: FC<SlideType> = ({ url, text }) => {
  return (
    <div className=" flex h-full">
      <div className="rounded-[10px] flex h-full">
        <img
          src={url}
          className=" w-full object-cover rounded-[10px]  h-full  z-10"
          alt=""
        />
      </div>

      <div className="z-20 flex flex-col gap-3 max-w-[50%] absolute bottom-5 left-5">
        <div>
          <Link
            className="bg-white py-1 px-2 rounded-[5px] text-[12px]"
            href=""
          >
            @_DR.MAMAEVA_N.D_
          </Link>
        </div>
        <h2 className=" text-white">{text}</h2>
      </div>
    </div>
  );
};

export default Slide;
