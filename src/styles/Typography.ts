import styled from "styled-components";
import { typography } from "styled-system";

interface ITypography {
  fontSize: number | Array<number>;
}

export const Typography = styled.div<ITypography>`
  font-weight: bold;
  ${typography}
`;
