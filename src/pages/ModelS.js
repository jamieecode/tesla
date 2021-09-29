import React from "react";
import Modal from "../components/Modal";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./images/model-s/1.jpg");
`;

const Text = styled.div`
  text-align: center;
  margin: 4.5em 0 3em;
  color: ##181b21;
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  p {
    font-weight: 300;
    font-size: 1.2rem;
  }
`;

const Infos = styled.article`
  display: flex;
  width: 65%;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  button {
    background: none;
    border: 3px solid white;
    border-radius: 2em;
    padding: 0.7em 3em;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 0.7em;
    font-weight: bold;
  }
  button: hover {
    background-color: white;
    color: black;
    transition: 0.5s linear;
  }
  margin-bottom: 2em;
`;

const Info = styled.div`
  p:first-of-type {
    font-size: 1.8rem;
    font-weight: 500;
  }
  p {
    font-size: 0.9rem;
    text-align: center;
    font-weight: 500;
  }
`;

const ModelS = () => {
  return (
    <Container>
      <Text>
        <h2>Model S</h2>
        <p>Plaid</p>
      </Text>
      <Infos>
        <Info>
          <p>396mi</p>
          <p>Range(EPA est.)</p>
        </Info>
        <Info>
          <p>1.99s</p>
          <p>0-60 mph*</p>
        </Info>
        <Info>
          <p>200mph</p>
          <p>Top Speed</p>
        </Info>
        <Info>
          <p>1,020hp</p>
          <p>Peak Power</p>
        </Info>
        <button>order now</button>
      </Infos>
      <Modal />
    </Container>
  );
};

export default ModelS;
