import styled from "styled-components";

export const SwitchWrapper = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;

  background-color: ${(props) => props.theme.basicThemeBtnBg};
  color: ${(props) => props.theme.basicFont};
  /* font-weight: bold; */

  padding: 0.4rem 1.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
