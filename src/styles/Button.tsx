import styled from "styled-components";

interface IButtonProps {
  fillColor: string;
  fontColor?: string;
  outline?: Boolean;
}

const Button = styled.button<IButtonProps>`
  background-color: ${(props) => props.fillColor};
  color: ${(props) => props.fontColor && props.fontColor};
  font-weight: bold;

  font-size: 1rem;
  padding: 0.4rem 1.2rem;
  border-radius: 0.4rem;
`;

export default Button;
