import styled, { css } from 'styled-components';

interface TextProps {
  $bold?: boolean;
}

const boldStyles = (bold: boolean) => css`
  font-weight: ${bold ? '700' : '400'};
`

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
    box-shadow: 0 0 1px 1px ${({theme}) => theme.color.remarkable};
    z-index: 1;
  }
`;

export const H2 = styled.h2<TextProps>`
  ${boldStyles(true)};
  font-size: 24px;
  margin-bottom: 30px;
`;

export const H3 = styled.h3<TextProps>`
  ${boldStyles(true)};
  font-size: 20px;
  margin-bottom: 30px;
`;

export const H4 = styled.h4<TextProps>`
  ${boldStyles(true)};
  font-size: 16px;
  margin-bottom: 20px;
`;

export const P = styled.p<TextProps>`
  ${({$bold}) => boldStyles($bold || false)};
  font-size: 14px;
`;

export const Link = styled.a<TextProps>`
  ${({$bold}) => boldStyles($bold || false)};
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: text-shadow 300ms ease;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 100%;
    border-bottom: 1px solid cyan;
    transform: translate(-50%, 0);
    transition: width 300ms ease;
  }

  &:hover {
    text-shadow: 0 0 5px cyan;
    cursor: pointer;

    &::before {
      width: 100%;
    }
  }
`

export const IconLink = styled.a<TextProps>`
  ${({$bold}) => boldStyles($bold || false)};
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: text-shadow 300ms ease;

  &:hover {
    text-shadow: none;
    border-bottom: none;
    cursor: pointer;
  }
`