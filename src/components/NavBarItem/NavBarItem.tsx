import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  text: string;
  Icon: any;
  to: string;
};

const NavBarItem = ({ text, Icon, to }: Props) => {
  return (
    <li className=" w-full md:w-[16rem]">
      <NavLink
        to={to}
        className={(isActive) => {
          console.log(isActive.isActive)
          return `${
            isActive.isActive ? "grayscale-0 opacity-100 bg-secondary text-[#FF3636]" : "text-primary opacity-70 grayscale"
          } flex justify-center items-center h-[5rem] no-underline hover:text-[#FF3636] hover:grayscale-0 hover:opacity-80 hover:bg-secondary duration-defaultSpeed md:justify-start`;
        }}
      >
        <Icon className="h-[4rem] w-[2.3rem] md:mx-[1.5rem]" />
        <div className="hidden ml-4 font-bold md:group-hover/nav:inline">
          {text}
        </div>
      </NavLink>
    </li>
  );
};

export default NavBarItem;
