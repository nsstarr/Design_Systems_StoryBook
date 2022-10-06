import React from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from './utils'

const App = () => {
  return (
    <>
      <PrimaryButton modifiers={["small"]}>Primary Button</PrimaryButton>
      <SecondaryButton modifiers="large">Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>
      <GlobalStyle />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
