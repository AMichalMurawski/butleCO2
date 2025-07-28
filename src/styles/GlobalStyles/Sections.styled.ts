import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 4rem 2rem;
  max-width: 1280px;
  width: 100%;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: 0 0 0.1rem 0.1rem ${({ theme }) => theme.color.remarkable};
    z-index: 1;
  }
`;