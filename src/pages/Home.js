import React from "react";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import styled from "styled-components";
import data from "../data";

const Container = styled.section`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Navbar />
      {data.map((car) => (
        <Section
          key={car.id}
          img={car.img}
          title={car.title}
          description={car.description}
        />
      ))}
    </Container>
  );
};

export default Home;
