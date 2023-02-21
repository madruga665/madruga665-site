import styled from "styled-components";
import { Colors } from "../../styles/variables";

interface IStyledListItem {
  highlight: boolean;
}

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
`;

export const StyledListItem = styled("li")<IStyledListItem>`
  font-weight: ${(props) => (props.highlight ? 800 : 300)};
  border-bottom: ${(props) => (props.highlight ? `0.2rem solid ${Colors.emerald}` : null)};
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }

  ${(props) => {
    if (!props.highlight) {
      return `
        &::after {
          content: "";
          display: block;
          border-bottom: 0.2rem solid ${Colors.emerald};
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
      }`;
    }
  }}

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;
