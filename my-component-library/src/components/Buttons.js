import styled from "styled-components";

export const primaryGreen = "#4B5229";

const Button = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Indie Flower", cursive;
  border-radius: 19px;
  color: white;
`;

export const PrimaryButton = styled(Button)`
  background-color: #4b5229;
  border: none;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #4b5229;
  background-color: transparent;
  color: #4b5229;
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  background-color: transparent;
  color: #4b5229;
`;
