import React from "react";

import Section from "../components/Section";
import styled from "styled-components";
import data from "../data";

const Container = styled.section`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      {data.map((car) => (
        <Section
          key={car.id}
          img={car.img}
          title={car.title}
          description={car.description}
          arrow={car.arrow}
        />
      ))}
    </Container>
  );
};

export default Home;
