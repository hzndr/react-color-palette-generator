import React from "react";
import styled from "styled-components";

const StyledColorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledColor = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 3px 4px 4px rgb(0 0 0 / 25%);
  background-color: ${(props) => props.hex};
`;

const StyledColorHex = styled.p`
  font-weight: 800;
  margin: 1rem;
  text-transform: uppercase;
`;

const ColorBox = ({ color }) => {
  return (
    <StyledColorBox>
      <StyledColor hex={color.raw_hex} />
      <div>
        <StyledColorHex>{color.raw_hex}</StyledColorHex>
      </div>
    </StyledColorBox>
  );
};

export default ColorBox;
