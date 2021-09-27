import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import styled from "styled-components";

const Container = styled.section`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Section backgroundImg="model-s.jpg" />
      <Section backgroundImg="model-y.jpg" />
      <Section backgroundImg="model-x.jpg" />
      <Section backgroundImg="model-3.jpg" />
      <Section backgroundImg="solar-panels.jpg" />
      <Section backgroundImg="solar-roof.jpg" />
    </Container>
  );
};

export default Home;
