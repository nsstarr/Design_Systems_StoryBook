import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets/index";
import { PrimaryButton } from "./Buttons";
import { useSpring, animated, config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${(props) => props.theme.formElementBackground};
  font-family: ${(props) => props.theme.primaryFont};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const ClosedModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 36px;
  height: 36px;
  padding: 0;
`;

const getAnimation = (showModal) => {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow,
  };
};


export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring(getAnimation(showModal));
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="Sign up for an account!"
          aria-hidden="true"
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <ClosedModalButton
          aria-label="Close modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </ClosedModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
