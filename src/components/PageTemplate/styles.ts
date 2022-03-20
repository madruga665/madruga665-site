import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const Container = styled("main")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.wetAsphalt};

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`;