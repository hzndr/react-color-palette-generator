import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  width: 40rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 20%);
  border-radius: 1rem;
  margin: 2rem 0;
  padding: 1rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: 80%;
  border: 2px solid #0585cc;
  border: none;
  font-size: 1.25rem;
`;

const StyledButton = styled.button`
  width: 20%;
  border: none;
  background-color: #0585cc;
  min-width: 7rem;
  padding: 1rem;
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  :hover {
    background-color: #065fb7;
  }
`;

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <StyledForm>
        <StyledWrapper>
          <label htmlFor="imageInput" className="sr-only">
            Paste image URL
          </label>
          <StyledInput
            id="imageInput"
            type="text"
            onChange={onInputChange}
            placeholder="Paste image URL here"
          />
          <StyledButton type="submit" onClick={onButtonSubmit}>
            Generate
          </StyledButton>
        </StyledWrapper>
      </StyledForm>
    </div>
  );
};

export default ImageLinkForm;
