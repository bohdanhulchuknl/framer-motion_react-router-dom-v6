import React from "react";
//Icons
import { GiFox, GiNewBorn, GiPositionMarker } from "react-icons/gi";
import { TbMeat, TbMessageCircle } from "react-icons/tb";
import { RiInformationLine } from "react-icons/ri";
//components
import { NavBarItem } from "../";
//img
import logo from "../../assets/logo.png";

type Props = {};

const navBarElements = [
  {
    text: "DESCRIPTION",
    icon: GiFox,
    to: "/description",
  },
  {
    text: "RANGE",
    icon: GiPositionMarker,
    to: "/range",
  },
  {
    text: "DIET",
    icon: TbMeat,
    to: "/diet",
  },
  {
    text: "LIFE HISTORY",
    icon: GiNewBorn,
    to: "/life-history",
  },
  {
    text: "CONSERVATION",
    icon: TbMessageCircle,
    to: "/conversation",
  },
  {
    text: "ABOUT",
    icon: RiInformationLine,
    to: "/",
  },
];

const NavBar = (props: Props) => {
  return (
    <div
      className="group/nav fixed bottom-0 w-[100vw] h-[5rem] bg-primary transition-[width] 
      duration-defaultSpeed overflow-hidden  md:top-0 md:w-[5rem] md:h-screen md:hover:w-[16rem] z-20"
    >
      <a
        href="#"
        className="hidden md:flex items-center justify-self-start text-[#fff] bg-secondary 
        cursor-pointer text-[2rem] mb-8 md:justify-start"
      >
        <img src={logo} alt="Logo" className="max-w-[4.5rem] w-full m-2 mr-8" />
        <span className="text-[#FF3636] font-bold">RED</span>FOX
      </a>
      <ul className="list-none flex md:flex-col h-full">
        {navBarElements.map((el) => (
          <NavBarItem Icon={el.icon} text={el.text} to={el.to} key={el.text} />
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
