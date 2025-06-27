import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 60px 30px;
  max-width: 1280px;
  width: 100%;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.color.remarkable};
    z-index: 1;
  }
`;