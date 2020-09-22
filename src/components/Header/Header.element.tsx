import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  font-weight: bold;
  width: 100%;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.basicFont};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
