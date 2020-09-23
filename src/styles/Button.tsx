import styled from "styled-components";

interface IButtonProps {
  fillColor: string;
  fontColor?: string;
  outline?: Boolean;
}

const Button = styled.button<IButtonProps>`
  background-color: ${(props) => props.fillColor};
  color: ${(props) => props.fontColor && props.fontColor};

  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;
`;

export default Button;
