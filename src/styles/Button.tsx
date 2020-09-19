import styled from "styled-components";
import { px2vw } from "../utils/style";

interface Button {
  fillColor: string;
}

const Button = styled.button<Button>`
  background-color: ${(props) => props.fillColor};

  padding: ${px2vw(8)};
  border-radius: ${px2vw(8)};
`;

export default Button;
