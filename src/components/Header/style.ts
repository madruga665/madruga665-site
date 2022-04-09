import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const HeaderStyled = styled("header")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 0.5rem 0;
  gap: 2.5rem;
  width: 100%;
  height: 8rem;
  display: flex;
  background: ${Colors.midnightBlue};
  color: ${Colors.clouds};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
    padding: 0.5rem 1rem;
  }
`;
