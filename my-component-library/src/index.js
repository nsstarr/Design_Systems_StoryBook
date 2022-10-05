import React from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => {
  return (
    <>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <TertiaryButton>Tertiary Button</TertiaryButton>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
