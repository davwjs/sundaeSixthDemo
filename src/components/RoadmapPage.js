import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";

import { Roadmap } from "../data/RoadmapData";
import Card from "../subComponents/Card";
import BigTitlte from "../subComponents/BigTitlte";
import logo from "../assets/Images/whitelogo.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 15rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const RoadmapPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Roadmap.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate>
          <img
            src={logo}
            width={80}
            height={80}
            fill="currentColor"
            alt={logo}
          />
        </Rotate>

        <BigTitlte text="ROADMAP" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default RoadmapPage;
