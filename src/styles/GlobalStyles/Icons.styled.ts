import styled from "styled-components";

export const IconLink = styled.a`
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: text-shadow 300ms ease;

  &:hover {
    text-shadow: none;
    border-bottom: none;
    cursor: pointer;
  }
`;