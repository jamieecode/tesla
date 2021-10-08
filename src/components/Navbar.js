import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const StyledNav = styled.nav`
  width: 100vw;
  z-index: 1;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
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

const StyledOverlay = styled.div`
  display: ${(props) => (props.sidebar ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.2rem);
  background-color: rgba(0, 0, 0, 0.2);
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const withoutNavbarRoutes = ["/account"];
  const { pathname } = useLocation();
  if (withoutNavbarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <StyledNav>
      <Link to="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <ul>
        <li>
          <StyledLink to="/models">Model S</StyledLink>
        </li>
        <li>
          <StyledLink to="/model3">Model 3</StyledLink>
        </li>
        <li>
          <StyledLink to="/modelx">Model X</StyledLink>
        </li>
        <li>
          <StyledLink to="/modely">Model Y</StyledLink>
        </li>

        <li>Solar Roof</li>
        <li>Solar Panels</li>
      </ul>
      <ul>
        <li>Shop</li>
        <li>
          <StyledLink to="/account">Account</StyledLink>
        </li>
        <li
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          Menu
        </li>
      </ul>
      <StyledOverlay onClick={() => setSidebar(!sidebar)} sidebar={sidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </StyledNav>
  );
};

export default Navbar;
