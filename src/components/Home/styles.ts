import styled from "styled-components";
import { AnimationPositionLeft, AnimationPositionRight } from "../../styles/animations";
import { Colors } from "../../styles/variables";

export const AboutContainer = styled("section")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-top: 8rem;

  @media only screen and (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }
`;

export const ImageContainer = styled("div")`
  margin: 0 0 1rem 0;
  animation: ${AnimationPositionLeft} 2.5s ease-in-out;

  .about-image {
    border: 5px solid ${Colors.emerald};
    border-radius: 50%;
    width: 350px;
  }
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  animation: ${AnimationPositionRight} 2.5s ease-in-out;
  max-width: 30rem;

  & p {
    font-size: 1.5rem;
    text-align: center;
    color: #fff;

    @media only screen and (min-width: 768px) {
      margin-left: 1rem;
      text-align: left;
    }
  }
`;
