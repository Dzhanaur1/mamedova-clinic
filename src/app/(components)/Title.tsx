import React, { FC } from "react";
type TitleType = {
  text: string;
};
const Title: FC<TitleType> = ({ text }) => {
  return (
    <h2 className=" text-[#000] lg:text-[34px] text-center my-[30px] md:my-[40px] text-[28px]">
      {text}
    </h2>
  );
};

export default Title;
