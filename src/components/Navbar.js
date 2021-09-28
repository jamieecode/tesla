import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledNav = styled.nav`
  z-index: 1;
  padding: 0.5em;
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-around;
  img {
    width: 10rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style: none;
    padding: 0.5em 1rem;
    cursor: pointer;
    border-radius: 0.8em;
    font-weight: 500;
    font-size: 0.9rem;
    color: #393c41;
  }

  li:hover {
    background-color: #e9ecef;
    transition: 0.5s linear;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #393c41;
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <StyledNav>
      <img src="/images/logo.png" alt="logo" />
      <ul>
        <li>
          <StyledLink to="/models">Model S</StyledLink>
        </li>
        <li>
          <StyledLink to="/modely">Model Y</StyledLink>
        </li>
        <li>
          <StyledLink to="/model3">Model 3</StyledLink>
        </li>
        <li>
          <StyledLink to="/modelx">Model X</StyledLink>
        </li>
        <li>
          <StyledLink to="/solarroofs">Solar Roof</StyledLink>
        </li>
        <li>
          <StyledLink to="/solarpanels">Solar Panels</StyledLink>
        </li>
      </ul>
      <ul>
        <li>
          <StyledLink to="/shop">Shop</StyledLink>
        </li>
        <li>
          <StyledLink to="/account">Account</StyledLink>
        </li>
        <li onClick={() => setSidebar(!sidebar)}>Menu</li>
      </ul>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </StyledNav>
  );
};

export default Navbar;
