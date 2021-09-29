import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

const StyledSidebar = styled.div`
  z-index: 2;
  width: 18rem;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.6s;
  div {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
  }
`;

const StyledIcon = styled(RiCloseLine)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledUl = styled.ul`
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <StyledSidebar show={sidebar}>
      <div>
        <StyledIcon onClick={() => setSidebar(false)} />
      </div>
      <StyledUl>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Cybertruck</li>
        <li>RoadSter</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Powerwall</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Find Us</li>
        <li>Support</li>
        <li>Investor Relations</li>
        <li>
          United States
          <p>English</p>
        </li>
      </StyledUl>
    </StyledSidebar>
  );
};

export default Sidebar;
