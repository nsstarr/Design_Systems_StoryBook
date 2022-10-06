import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  border-radius: 19px;
  color: white;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${defaultTheme.disabled};
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    border-color: ${defaultTheme.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid ${defaultTheme.primaryColor};
  background-color: transparent;
  color: ${defaultTheme.textColor};

  &:disabled {
    border: 2px solid ${defaultTheme.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  background-color: transparent;
  color: ${defaultTheme.textColor};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
