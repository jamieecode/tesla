import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { useScrollFade } from "../hooks/useScrollFade";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
`;

const Text = styled.div`
  text-align: center;
  margin: 4em 0 3em;
  color: ##181b21;
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  p {
    font-size: 0.9rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  button {
    background: black;
    opacity: 0.8;
    color: white;
    width: 16rem;
    padding: 1em;
    border: none;
    border-radius: 2em;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    margin: 0 1em 3em;
  }

  button: last-of-type {
    background: white;
    color: black;
    opacity: 0.6;
  }
`;

const StyledIcon = styled(FiChevronDown)`
  font-weight: bold;
  font-size: 3rem;
  animation: animateDown infinite 1.8s;
`;

const Section = ({ img, title, description, arrow }) => {
  const animatedItem = useScrollFade();
  return (
    <StyledSection backgroundImg={img}>
      <Text {...animatedItem}>
        <h2>{title}</h2>
        <p>{description}</p>
      </Text>
      <Text>
        <Buttons>
          <button>custom order</button>
          <button>existing inventory</button>
        </Buttons>
        {arrow && <StyledIcon />}
      </Text>
    </StyledSection>
  );
};

export default Section;
