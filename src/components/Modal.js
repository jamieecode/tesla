import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { useScrollFade } from "../hooks/useScrollFade";

const StyledModal = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 3rem;
  background-color: white;
  border-radius: 0.5em;
  text-align: center;
  box-shadow: 1px 2px 10px 5px #7d8597;
  div {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
  }
  p {
    padding: 0 1em;
  }
  button {
    background-color: #4361ee;
    color: white;
    padding: 1em 2em;
    border-radius: 2em;
    text-transform: uppercase;
    font-weight: bold;
    margin: 2em 0;
  }
  button:hover {
    filter: brightness(0.85);
    transition: 0.5s linear;
  }
`;

const StyledIcon = styled(RiCloseLine)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ setShowModal }) => {
  const animatedItem = useScrollFade();
  return (
    <StyledModal {...animatedItem}>
      <div>
        <StyledIcon onClick={() => setShowModal(false)} />
      </div>
      <p>Question about ordering a Tesla product?</p>
      <button>start chat</button>
    </StyledModal>
  );
};

export default Modal;
