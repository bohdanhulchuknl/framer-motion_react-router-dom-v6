import React from "react";
//motion
import { motion as m } from "framer-motion";
//images
import conversationImg from "../../assets/Conversation.png";

type Props = {};

const Conversation = (props: Props) => {
  return (
    <m.div
      id="description"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: .25,
        duration: .5,
        ease: "easeOut",
      }}
      exit={{ opacity: 0 }}
    >
      <m.h1
        initial={{ y: "-100px" }}
        animate={{ y: "0px" }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        exit={{ y: "-100px" }}
        className="font-bebas text-[52px] font-bold tracking-[0.1rem] text-secondary md:ml-[10rem]"
      >
        Conversation
      </m.h1>
      <div className="relative h-[25rem] md:left-[5rem]">
        <m.img
          src={conversationImg}
          alt="rangeImg"
          initial={{ x: "-200px" }}
          animate={{ x: "0px" }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            ease: "easeOut",
          }}
          exit={{ x: "-200px" }}
          className="absolute max-h-[20rem] m-auto top-[3rem] left-[5rem]"
        />
        <m.div
          initial={{ rotate: -90, x: "-200px" }}
          animate={{ rotate: 0, x: "0px" }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            ease: "easeOut",
          }}
          exit={{ rotate: -90, x: "-200px" }}
          className="absolute h-[20rem] w-[20rem] ml-8 border-solid border-[1rem] border-bgSecondary"
        ></m.div>
      </div>
      <m.div
        initial={{ y: "100px" }}
        animate={{ y: "0px" }}
        transition={{
          delay: 0.25,
          duration: 0.5,
          ease: "easeOut",
        }}
        exit={{ y: "100px" }}
      >
        <p className="font-poppins md:ml-[10rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum modi,
          quaerat quam recusandae maxime accusantium id porro aut dolores totam
          blanditiis, voluptates iusto voluptas ipsa repellat dignissimos
          repellendus velit.
        </p>
      </m.div>
    </m.div>
  );
};

export default Conversation;
