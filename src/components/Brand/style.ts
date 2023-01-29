import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const LogoName = styled("div")`
  display: flex;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-left: 0.5rem;

    span {
      font-size: 1.8rem;
      color: ${Colors.emerald};
    }
  }
`;
