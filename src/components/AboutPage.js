import React, { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import logo from "../assets/Images/whitelogo.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 75%;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 440px) {
    width: 50%;
    font-size: calc(0.6rem + 0.3vw);
  }
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

const AboutPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />
        <Main>
          Sundae School is a craft cann@bi$ brand and a smoke₩ear label born in
          Seoul and raised in California. We imagine an alternate green, hazy
          universe where God in her highest inhales and exhales to create the
          world. Our mission is to globalize [redacted] by serving great,
          reliable highs and illustrating narratives that contextualize and
          de-stigmatize the plant.
          <br /> <br />
          We are a team of product-oriented, mission-driven creatives and
          midnight tokers. As a team comprised of immigrants, LGBTQIA+, and
          people of color, we are committed to building an industry and
          community that reflects everyone, not just the lucky few. In line with
          our commitment to diversity and equity, we donate 1% of our sales
          through Beam, and work specifically with minority owned businesses -
          from equity-owned flower businesses in California to garment factories
          hiring the single-parents in Seoul. We make it a priority to partner
          with people and brands who reflect our ideals.
          <br /> <br />
          Sundae School is not just a team of creatives and an array of
          products. Our community of honor rollers around the world are the true
          inspiration behind the brand. Join us on our discord channel or just
          dm us on our instagram for any questions regarding enrollment. Please
          check the 10 commandments of Sundae School prior to joining to learn
          more about our values.
          <br /> <br />* Minimum GPA required for matriculation is 4.20
        </Main>
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
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
