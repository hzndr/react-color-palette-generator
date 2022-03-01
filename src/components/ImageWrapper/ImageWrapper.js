import React from "react";
import styled from "styled-components";

const StyledImageWrapper = styled.div`
  margin-top: 1.5rem;
`;

const StyledImage = styled.img`
  height: 300px;
  width: auto;
`;

const ImageWrapper = ({ imageUrl }) => {
  return (
    <StyledImageWrapper>
      <StyledImage id="input-image" src={imageUrl} alt="" />
    </StyledImageWrapper>
  );
};

export default ImageWrapper;
