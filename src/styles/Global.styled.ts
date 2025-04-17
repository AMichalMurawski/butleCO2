import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 60px 30px;
  max-width: 1280px;
  width: 100%;
  scroll-margin-top: 120px;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.remarkable};
    z-index: 1;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const H3 = styled.h3`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const P = styled.p`
  font-size: 14px;
`;
