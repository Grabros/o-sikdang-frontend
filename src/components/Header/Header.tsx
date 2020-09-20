import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { ImSpoonKnife } from "react-icons/im";
import Button from "../../styles/Button";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
} from "./Header.element";

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <ImSpoonKnife />
        </HeaderLeft>
        <HeaderRight>
          <Button fillColor={theme.green} fontColor={theme.white}>
            Sign in
          </Button>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
