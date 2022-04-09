import styled from "styled-components";
import { AnimationPositionLeft, AnimationPositionRight } from "../../styles/animations";

export const AboutContainer = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;

  @media only screen and (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const ImageContainer = styled("div")`
  margin: 0 0 1rem 0;
  animation: ${AnimationPositionLeft} 2.5s ease-in-out;
  .about-image {
    border-radius: 2rem;
  }
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  animation: ${AnimationPositionRight} 2.5s ease-in-out;
  & p {
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    max-width: 30rem;

    @media only screen and (min-width: 768px) {
      margin-left: 1rem;
      text-align: left;
    }
  }
`;
