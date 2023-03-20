import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import "./storybook.css";


export const parameters = {
  backgrounds: {
    default: "default theme",
    values: [
      {
        name: "default",
        value: "#ffff",
      },
      {
        name: "dark theme",
        value: "#322313",
      },
    ],
  },
};



addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withContexts(contexts));
