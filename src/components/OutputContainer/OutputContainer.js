import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 1rem 0;
`;

const OutputContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default OutputContainer;
