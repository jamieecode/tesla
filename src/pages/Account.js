import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosGlobe, IoIosInformationCircle } from "react-icons/io";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.3rem;
    font-weight: 500;
    margin: 0.7em 0;
  }
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  width: 100vw;

  img {
    width: 10rem;
  }

  button {
    background: none;
    padding: 0.5em 1.2rem;
    font-weight: 500;
    font-size: 1rem;
    color: #393c41;
    font-weight: 500;
    display: flex;
    align-items: center;
    border-radius: 1.5em;
  }

  button:hover {
    background-color: #e9ecef;
    transition: 0.3s linear;
  }
`;

const StyledInfoIcon = styled(IoIosInformationCircle)`
  color: #4361ee;
  font-size: 1.5rem;
  margin-left: 0.5em;
  cursor: pointer;
`;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 0.6em 0.8em;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  input {
    padding: 1em;
    background-color: #f4f4f4;
    border-radius: 2em;
    border: none;
    width: 20rem;
  }

  input:hover {
    background-color: #eeeeee;
  }

  p {
    margin: 2.5em 0;
    display: flex;
  }

  p:before,
  p:after {
    color: white;
    content: "";
    flex: 1;
    border-bottom: 2px solid #dddddd;
    margin: auto 0.25em;
  }
`;

const StyledButton = styled.button`
  background-color: #f4f4f4;
  width: 20rem;
  padding: 1em;
  margin: 1em 0;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 2em;
  &:first-of-type {
    background-color: #4361ee;
    color: white;
  }
  &: last-of-type {
    border: 2px solid black;
    background-color: white;
  }
  &: last-of-type:hover {
    background-color: black;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  color: #393c41;
  font-size: 0.8rem;
`;

const Account = () => {
  return (
    <Container>
      <StyledNav>
        <Link to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <button>
          <IoIosGlobe />
          en-US
        </button>
      </StyledNav>

      <h2>Sign In</h2>
      <FormContainer>
        <form>
          <label>
            Email Address <StyledInfoIcon />
          </label>
          <input type="text" />
          <label> Password</label>
          <input type="text" />
        </form>
        <StyledButton>sign in</StyledButton>
        <StyledButton>cancel</StyledButton>
        <div>
          <StyledLink>Forgot email?</StyledLink> |{" "}
          <StyledLink>Forgot Password?</StyledLink>
          <p>OR</p>
        </div>
        <StyledButton>create account</StyledButton>
      </FormContainer>
    </Container>
  );
};

export default Account;
