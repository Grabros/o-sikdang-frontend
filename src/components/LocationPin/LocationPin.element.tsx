import styled from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const LocationPinWrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const LocationPinContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 4rem auto 7rem;

  .speech-bubble {
    margin-bottom: 1.5rem;
    font-weight: bold;

    h3 {
      font-style: italic;
      margin-top: 0.5rem;
    }
  }

  .location-pin {
    font-size: 60px;
    transition: 0.3s;

    :hover {
      color: #0580b5;
    }
  }

  @media screen and (max-width: 520px) {
    img {
      width: 100%;
    }

    .location-pin {
      font-size: 30px;
    }
  }
`;
