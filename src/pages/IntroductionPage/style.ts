import styled from "styled-components";
import Wave from "react-wavify";
import { Colors } from "../../styles/variables";
import { AnimationPositionRight, AnimationPositionLeft, FadeIn } from "../../styles/animations";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: ${Colors.wetAsphalt};
  gap: 50px;
  color: ${Colors.clouds};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${AnimationPositionRight} 2.5s ease-in-out;
  }

  a {
    border-radius: 5px;
    padding: 10px 15px;
    text-decoration: none;
    color: ${Colors.clouds};
    text-transform: upperCase;
    animation: ${AnimationPositionLeft} 2.5s ease-in-out;

    :not(:hover) {
      background-color: ${Colors.emerald};
      transition: 500ms;
    }

    :hover {
      background-color: ${Colors.midnightBlue};
      transition: 500ms;
    }
  }
`;

export const CustomWave = styled(Wave)`
  position: absolute;
  bottom: 0;

  svg {
    animation: ${FadeIn} 10s ease-in-out;
  }
`;
