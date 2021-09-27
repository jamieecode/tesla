import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
`;

const Section = ({ backgroundImg }) => {
  return <StyledSection backgroundImg={backgroundImg}></StyledSection>;
};

export default Section;
