import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[30px] h-[270px] md:h-[270px] w-full bg-biege flex-[0_0_auto]">
      <div className="container  flex flex-col items-center h-full justify-center">
        <img
          className=" max-h-[90px] mt-[20px] w-auto object-contain"
          src="icons/logo-black.png"
          alt=""
        />

        <div className=" flex flex-col items-center max-w-[200px]">
          <h3 className=" font-bold text-black text-[14px]">
            Мамаева Наида Дагировна
          </h3>
          <p className=" text-[13px] text-center text-black font-light">
            {" "}
            Пластический хирург в Дагестане
          </p>
          <div className="flex gap-2 mt-5">
            <Link href="">
              <svg
                width="20"
                height="22"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9485 5.12769C15.9395 4.39824 15.8135 3.67604 15.5762 2.9934C15.3704 2.4176 15.056 1.89466 14.6532 1.45801C14.2504 1.02136 13.768 0.680595 13.2368 0.457486C12.6151 0.204527 11.9584 0.0677476 11.2945 0.0529721C10.4398 0.0115576 10.1688 0 7.99911 0C5.82941 0 5.55131 6.45827e-08 4.7028 0.0529721C4.03924 0.0678563 3.38281 0.204634 2.76144 0.457486C2.23017 0.680439 1.74769 1.02115 1.34485 1.45782C0.942021 1.89449 0.627711 2.41751 0.422035 2.9934C0.188211 3.66675 0.062304 4.37848 0.0497557 5.09783C0.0115504 6.02533 0 6.31908 0 8.67104C0 11.023 -6.6198e-09 11.3235 0.0497557 12.2442C0.0630831 12.9647 0.188361 13.6754 0.422035 14.3506C0.628057 14.9263 0.9426 15.4491 1.34557 15.8856C1.74853 16.3221 2.23107 16.6627 2.76233 16.8856C3.38199 17.1487 4.03854 17.2952 4.70369 17.319C5.55931 17.3604 5.8303 17.3729 8 17.3729C10.1697 17.3729 10.4478 17.3729 11.2963 17.319C11.9602 17.3048 12.6169 17.1683 13.2386 16.9154C13.7696 16.692 14.2519 16.3512 14.6547 15.9146C15.0575 15.4779 15.3719 14.9551 15.578 14.3795C15.8116 13.7053 15.9369 12.9945 15.9502 12.2731C15.9884 11.3466 16 11.0529 16 8.69993C15.9982 6.34797 15.9982 6.0494 15.9485 5.12769ZM7.99378 13.1188C5.72457 13.1188 3.88627 11.126 3.88627 8.66622C3.88627 6.20639 5.72457 4.21368 7.99378 4.21368C9.08316 4.21368 10.1279 4.68279 10.8982 5.5178C11.6685 6.35281 12.1013 7.48533 12.1013 8.66622C12.1013 9.84711 11.6685 10.9796 10.8982 11.8146C10.1279 12.6497 9.08316 13.1188 7.99378 13.1188ZM12.2648 5.08724C12.139 5.08737 12.0144 5.0606 11.8981 5.00847C11.7818 4.95633 11.6762 4.87986 11.5872 4.78343C11.4983 4.68699 11.4277 4.57248 11.3796 4.44646C11.3316 4.32044 11.3069 4.18537 11.307 4.04899C11.307 3.91271 11.3317 3.77776 11.3798 3.65185C11.428 3.52594 11.4985 3.41154 11.5874 3.31517C11.6763 3.21881 11.7818 3.14237 11.898 3.09021C12.0141 3.03806 12.1386 3.01122 12.2643 3.01122C12.39 3.01122 12.5145 3.03806 12.6307 3.09021C12.7468 3.14237 12.8524 3.21881 12.9413 3.31517C13.0302 3.41154 13.1007 3.52594 13.1488 3.65185C13.1969 3.77776 13.2217 3.91271 13.2217 4.04899C13.2217 4.62301 12.7934 5.08724 12.2648 5.08724Z"
                  fill="#D6B886"
                />
                <path
                  d="M7.99383 11.5585C9.46741 11.5585 10.662 10.2636 10.662 8.6662C10.662 7.06884 9.46741 5.77393 7.99383 5.77393C6.52025 5.77393 5.32568 7.06884 5.32568 8.6662C5.32568 10.2636 6.52025 11.5585 7.99383 11.5585Z"
                  fill="#D6B886"
                />
              </svg>
            </Link>
            <Link href="">
              <svg
                width="20"
                height="22"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9485 5.12769C15.9395 4.39824 15.8135 3.67604 15.5762 2.9934C15.3704 2.4176 15.056 1.89466 14.6532 1.45801C14.2504 1.02136 13.768 0.680595 13.2368 0.457486C12.6151 0.204527 11.9584 0.0677476 11.2945 0.0529721C10.4398 0.0115576 10.1688 0 7.99911 0C5.82941 0 5.55131 6.45827e-08 4.7028 0.0529721C4.03924 0.0678563 3.38281 0.204634 2.76144 0.457486C2.23017 0.680439 1.74769 1.02115 1.34485 1.45782C0.942021 1.89449 0.627711 2.41751 0.422035 2.9934C0.188211 3.66675 0.062304 4.37848 0.0497557 5.09783C0.0115504 6.02533 0 6.31908 0 8.67104C0 11.023 -6.6198e-09 11.3235 0.0497557 12.2442C0.0630831 12.9647 0.188361 13.6754 0.422035 14.3506C0.628057 14.9263 0.9426 15.4491 1.34557 15.8856C1.74853 16.3221 2.23107 16.6627 2.76233 16.8856C3.38199 17.1487 4.03854 17.2952 4.70369 17.319C5.55931 17.3604 5.8303 17.3729 8 17.3729C10.1697 17.3729 10.4478 17.3729 11.2963 17.319C11.9602 17.3048 12.6169 17.1683 13.2386 16.9154C13.7696 16.692 14.2519 16.3512 14.6547 15.9146C15.0575 15.4779 15.3719 14.9551 15.578 14.3795C15.8116 13.7053 15.9369 12.9945 15.9502 12.2731C15.9884 11.3466 16 11.0529 16 8.69993C15.9982 6.34797 15.9982 6.0494 15.9485 5.12769ZM7.99378 13.1188C5.72457 13.1188 3.88627 11.126 3.88627 8.66622C3.88627 6.20639 5.72457 4.21368 7.99378 4.21368C9.08316 4.21368 10.1279 4.68279 10.8982 5.5178C11.6685 6.35281 12.1013 7.48533 12.1013 8.66622C12.1013 9.84711 11.6685 10.9796 10.8982 11.8146C10.1279 12.6497 9.08316 13.1188 7.99378 13.1188ZM12.2648 5.08724C12.139 5.08737 12.0144 5.0606 11.8981 5.00847C11.7818 4.95633 11.6762 4.87986 11.5872 4.78343C11.4983 4.68699 11.4277 4.57248 11.3796 4.44646C11.3316 4.32044 11.3069 4.18537 11.307 4.04899C11.307 3.91271 11.3317 3.77776 11.3798 3.65185C11.428 3.52594 11.4985 3.41154 11.5874 3.31517C11.6763 3.21881 11.7818 3.14237 11.898 3.09021C12.0141 3.03806 12.1386 3.01122 12.2643 3.01122C12.39 3.01122 12.5145 3.03806 12.6307 3.09021C12.7468 3.14237 12.8524 3.21881 12.9413 3.31517C13.0302 3.41154 13.1007 3.52594 13.1488 3.65185C13.1969 3.77776 13.2217 3.91271 13.2217 4.04899C13.2217 4.62301 12.7934 5.08724 12.2648 5.08724Z"
                  fill="#D6B886"
                />
                <path
                  d="M7.99383 11.5585C9.46741 11.5585 10.662 10.2636 10.662 8.6662C10.662 7.06884 9.46741 5.77393 7.99383 5.77393C6.52025 5.77393 5.32568 7.06884 5.32568 8.6662C5.32568 10.2636 6.52025 11.5585 7.99383 11.5585Z"
                  fill="#D6B886"
                />
              </svg>
            </Link>
            <Link href="">
              <svg
                width="20"
                height="22"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9485 5.12769C15.9395 4.39824 15.8135 3.67604 15.5762 2.9934C15.3704 2.4176 15.056 1.89466 14.6532 1.45801C14.2504 1.02136 13.768 0.680595 13.2368 0.457486C12.6151 0.204527 11.9584 0.0677476 11.2945 0.0529721C10.4398 0.0115576 10.1688 0 7.99911 0C5.82941 0 5.55131 6.45827e-08 4.7028 0.0529721C4.03924 0.0678563 3.38281 0.204634 2.76144 0.457486C2.23017 0.680439 1.74769 1.02115 1.34485 1.45782C0.942021 1.89449 0.627711 2.41751 0.422035 2.9934C0.188211 3.66675 0.062304 4.37848 0.0497557 5.09783C0.0115504 6.02533 0 6.31908 0 8.67104C0 11.023 -6.6198e-09 11.3235 0.0497557 12.2442C0.0630831 12.9647 0.188361 13.6754 0.422035 14.3506C0.628057 14.9263 0.9426 15.4491 1.34557 15.8856C1.74853 16.3221 2.23107 16.6627 2.76233 16.8856C3.38199 17.1487 4.03854 17.2952 4.70369 17.319C5.55931 17.3604 5.8303 17.3729 8 17.3729C10.1697 17.3729 10.4478 17.3729 11.2963 17.319C11.9602 17.3048 12.6169 17.1683 13.2386 16.9154C13.7696 16.692 14.2519 16.3512 14.6547 15.9146C15.0575 15.4779 15.3719 14.9551 15.578 14.3795C15.8116 13.7053 15.9369 12.9945 15.9502 12.2731C15.9884 11.3466 16 11.0529 16 8.69993C15.9982 6.34797 15.9982 6.0494 15.9485 5.12769ZM7.99378 13.1188C5.72457 13.1188 3.88627 11.126 3.88627 8.66622C3.88627 6.20639 5.72457 4.21368 7.99378 4.21368C9.08316 4.21368 10.1279 4.68279 10.8982 5.5178C11.6685 6.35281 12.1013 7.48533 12.1013 8.66622C12.1013 9.84711 11.6685 10.9796 10.8982 11.8146C10.1279 12.6497 9.08316 13.1188 7.99378 13.1188ZM12.2648 5.08724C12.139 5.08737 12.0144 5.0606 11.8981 5.00847C11.7818 4.95633 11.6762 4.87986 11.5872 4.78343C11.4983 4.68699 11.4277 4.57248 11.3796 4.44646C11.3316 4.32044 11.3069 4.18537 11.307 4.04899C11.307 3.91271 11.3317 3.77776 11.3798 3.65185C11.428 3.52594 11.4985 3.41154 11.5874 3.31517C11.6763 3.21881 11.7818 3.14237 11.898 3.09021C12.0141 3.03806 12.1386 3.01122 12.2643 3.01122C12.39 3.01122 12.5145 3.03806 12.6307 3.09021C12.7468 3.14237 12.8524 3.21881 12.9413 3.31517C13.0302 3.41154 13.1007 3.52594 13.1488 3.65185C13.1969 3.77776 13.2217 3.91271 13.2217 4.04899C13.2217 4.62301 12.7934 5.08724 12.2648 5.08724Z"
                  fill="#D6B886"
                />
                <path
                  d="M7.99383 11.5585C9.46741 11.5585 10.662 10.2636 10.662 8.6662C10.662 7.06884 9.46741 5.77393 7.99383 5.77393C6.52025 5.77393 5.32568 7.06884 5.32568 8.6662C5.32568 10.2636 6.52025 11.5585 7.99383 11.5585Z"
                  fill="#D6B886"
                />
              </svg>
            </Link>
          </div>
          <div className="flex w-full my-4 h-[1px] bg-biege_600"></div>
          <p className=" text-[12px]  font-sans text-biege_600">
            {" "}
            2024 Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
