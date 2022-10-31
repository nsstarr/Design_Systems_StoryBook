import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import { Illustrations } from "../assets";

import React from "react";

const Nav = styled.nav`
  width: 800px;
  height: 120px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: ${typeScale.paragraph};
  font-family: ${(props) => props.theme.primaryFont};
  color: ${(props) => props.theme.textOnNavbarLinks};
`;
const Link = styled.div`
  font-size: ${typeScale.header4};
  text-align: center;
  padding: 4px 12px;
  cursor: pointer;
  min-width: 100px;
  border-radius: 22px;
  border: 1.5px solid #4B5229;
   transition: background-color 0.2s linear, color 0.2s linear;
    &:hover {
    background-color: ${(props) => props.theme.primaryNavHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 75%;
  justify-content: space-between;
`;

export const Navbar = () => {
  return (
    <Nav>
      <img
        src={Illustrations.Avatar}
        alt="Sign up or Sign in!"
        aria-hidden="true"
      />
      <LinkWrapper>
      <Link>What's On</Link>
      <Link>Traders</Link>
      <Link>Recipes</Link>
      <Link>Blog</Link></LinkWrapper>
    </Nav>
  );
};

export default Navbar;
