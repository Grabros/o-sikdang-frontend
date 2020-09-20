import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.yellow};
  height: 70px;
  font-weight: bold;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  color: ${(props) => props.theme.black};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
