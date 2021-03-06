import styled from "styled-components";

export const SwitchModeWrapper = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;

  background-color: ${(props) => props.theme.basicThemeBtnBg};
  color: ${(props) => props.theme.basicFont};
  font-size: 16px;
  font-weight: bold;

  padding: 4px 12px;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
