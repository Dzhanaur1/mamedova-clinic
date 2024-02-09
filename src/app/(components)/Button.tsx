import React, { FC, HTMLAttributes } from "react";

type ButtonType = {
  text: string;
  className: string;
};
const Button: FC<ButtonType> = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
