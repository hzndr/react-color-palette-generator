import React from "react";
import logo from "./color-palette.png";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 2rem 0;
`;

const StyledImage = styled.img`
  height: 4rem;
  width: auto;
`;

const Logo = () => {
  return (
    <a href="https://www.flaticon.com/free-icons/color-palette">
      <span className="sr-only">
        Color palette icons created by kmg design - Flaticon
      </span>
      <StyledWrapper>
        <StyledImage src={logo} alt="" />
      </StyledWrapper>
    </a>
  );
};

export default Logo;
