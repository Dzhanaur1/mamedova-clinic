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
          className=" w-full rounded-[10px]  h-auto  z-10"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-3 absolute top-0 left-0">
        <Link className="bg-white py-1 px-2 rounded-sm text-[12px]" href="">
          @_DR.MAMAEVA_N.D_
        </Link>
      </div>
    </div>
  );
};

export default Slide;
