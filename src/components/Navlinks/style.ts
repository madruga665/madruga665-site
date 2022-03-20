import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const Links = styled("nav")`
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 20rem;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    list-style: none;
  }
  li {
    font-weight: 800;
    cursor: pointer;
    a {
      color: #fff;
      text-decoration: none;
    }
    &::after {
      content: "";
      display: block;
      border-bottom: 0.2rem solid ${Colors.emerald};
      transform: scaleX(0);
      transition: transform 300ms ease-in-out;
    }
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }
`;
