import { keyframes } from "styled-components";

export const AnimationPositionLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationPositionRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const FadeIn = keyframes`
  0% {
    opacity: 0;

  }

  100% {
    opacity: 1;
  }
`;
