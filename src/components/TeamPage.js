import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";

import { Teams } from "../data/TeamData";
import TeamComponent from "./TeamComponent";
import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";
import logo from "../assets/Images/logo.png";

const MainContainer = styled(motion.div)`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
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

// Framer-motion config
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

const TeamPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <SocialIcons />
        <Center>
          <Grid>
            {Teams.map((team) => {
              return <TeamComponent key={team.id} blog={team} />;
            })}
          </Grid>
        </Center>
        <BigTitle text="TEAM" top="5rem" left="5rem" />
      </Container>
      <Rotate click={click}>
        <img
          src={logo}
          onClick={() => handleClick()}
          width={80}
          height={80}
          fill="currentColor"
          alt={logo}
        />
      </Rotate>
    </MainContainer>
  );
};

export default TeamPage;
