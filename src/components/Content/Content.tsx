import React from "react";
//router-dom
import { Route, Routes, useLocation } from "react-router-dom";
//pages
import {
  Description,
  Range,
  Diet,
  LifeHistory,
  Conversation,
  NotMatch
} from "../../pages";
//motion
import { AnimatePresence } from "framer-motion";


type Props = {};

const routes = [
  {
    path: "/description",
    name: "Description",
    Component: Description,
  },
  {
    path: "/range",
    name: "Range",
    Component: Range,
  },
  {
    path: "/diet",
    name: "Diet",
    Component: Diet,
  },
  {
    path: "/life-history",
    name: "LifeHistory",
    Component: LifeHistory,
  },
  {
    path: "/conversation",
    name: "Conversation",
    Component: Conversation,
  },
];

const routeComponents = routes.map(({ path, Component }) => (
  <Route path={path} element={<Component />} />
));

const Content = (props: Props) => {
  const location = useLocation();
  return (
    <div className="m-0 p-4 z-10 pb-[90px] md:pb-0 md:my-auto md:mx-[16rem]">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          {routeComponents}
          <Route path="*" element={<NotMatch/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Content;
