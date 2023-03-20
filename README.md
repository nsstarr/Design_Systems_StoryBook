# Design Systems with React and Storybook

Autumnal Design system built with React & Storybook. 

 Inititally inspired by [@emmabostian](https://github.com/emmabostian)'s Introduction Into Design Systems, the project started with the idea to design a system with a fall aesthetic that could fit an independent business, farmers market or an autumn funfair. 

 I built a few components in Figma & coded them up in React & Styled components.

## Installation


Clone the project, cd into the folder and run:

```bash
git clone https://github.com/anastasia-starostina/Design_Systems_StoryBook
``` 
Open react-storybook.fig file or follow [this link](https://www.figma.com/file/3zh02xDV6hPJiSWtebCgUK/react-storybook?node-id=1%3A3&t=NXR4R4D22ahvMVVu-1) to view the component library in Figma. The pages with colours, typescale, textfields, modal & buttons are on the left-hand side.

Move to the project directory:

```bash
cd component-library
```

Install dependencies: 

```bash
npm i --legacy-peer-deps
```

To start the React app run:

```bash
npm start 
```

To open the storybook run:

```bash
npm run storybook
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_OPTIONS=--openssl-legacy-provider`



## Wireframes

Please view the react-storybook.fig file to see the pages with colour styles, typescale and button, textfiels and modal components. All primary colours of this design system are based on the image attached to the colours page. The colours were purposely chosen to communicate the semantics of the application and recreate the atmosphere of the season. The design language was developed with Accessibility, Colour and Typography principles in mind. 

## Tech Stack

- React
- Storybook
- Styled Components
- React Spring Animation

## Key Takeaways 
- Styled Components is a great tool for developing themes in React applications.
- Use of inline styling as a way to prioritise styles of certain Html elements with CSS specificity.
- Understanding of the importance and drawbacks of the Design Systems.
- Acknowledging that robust design systems take time to build and maintain.
- Microinteractions can be added to delight the user while they are waiting for the page to load and to improve their overall user experience.

## Future Implementations

- Develop more UI components and document them in the storybook.
- Build a business homepage with the UI components. 
- Explore more physics imspired aimations and add them to the project.
- Migrate the project to [v7.0.0-alpha.45](https://github.com/storybookjs/storybook/releases) when it's more stable.

## Authors

[@anastasia-starostina](https://github.com/anastasia-starostina)

## License

[MIT](https://choosealicense.com/licenses/mit/)

