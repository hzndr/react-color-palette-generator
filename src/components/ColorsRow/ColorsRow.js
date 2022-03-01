import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import styled from "styled-components";

const StyledColorRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  height: 7.8125rem;
`;

const ColorsRow = ({ colors }) => {
  return (
    <StyledColorRow>
      {colors.map((color) => (
        <ColorBox color={color} key={color.raw_hex} />
      ))}
    </StyledColorRow>
  );
};

export default ColorsRow;
