import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { SignUpModal } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <button
          style={{
            margin: "0 16px 24px",
            padding: "8px",
            background: "none",
            cursor: "pointer",
            border: "2px solid #000",
            marginTop: "60px",
          }}
          onClick={() => setUseDarkTheme(true)}
        >
          Dark theme
        </button>
        <button
          style={{
            margin: "0 16px 24px",
            padding: "8px",
            background: "none",
            cursor: "pointer",
            border: "2px solid #000",
            marginTop: "60px",
          }}
          onClick={() => setUseDarkTheme(false)}
        >
          Default theme
        </button>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setShowModal(true)}
        >
          Show modal
        </button>
        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryBackground,
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <SignUpModal showModal={showModal} setShowModal={setShowModal} />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
