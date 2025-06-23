import styled, { createGlobalStyle, css } from 'styled-components';

type TextAlignProps = 'left' | 'center' | 'right' | 'justify' | 'inherit';
type TextProps = {
  $bold?: boolean;
  $textAlign?: TextAlignProps;
  $fontSize?: string;
};

type ParagraphProps = TextProps & {
  $textIndent?: string;
};

const boldStyles = (bold?: boolean) => css`
  font-weight: ${bold ? '700' : '400'};
`;

const textAlignStyle = (textAlign?: TextAlignProps) => css`
  text-align: ${textAlign || 'inherit'};
`;

const fontStyle = (size?: string, family?: 'main' | 'heading') => css`
  font-size: ${size};
  ${({ theme }) => (family === 'heading' ? theme.fonts.heading : theme.fonts.main)};
`;

const textIndentStyle = (textIndent?: string) => css`
  text-indent: ${textIndent || null};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.main};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  [id] {
    scroll-margin-top: 120px;
  }
`;

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

export const H1 = styled.h2<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '56px', 'heading')};
  margin-bottom: 30px;
`;

export const H2 = styled.h2<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '30px', 'heading')};
  margin-bottom: 30px;
`;

export const H3 = styled.h3<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '24px', 'heading')};
  margin-bottom: 30px;
`;

export const H4 = styled.h4<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '16px', 'heading')};
  margin-bottom: 20px;
`;

export const P = styled.p<ParagraphProps>`
  ${({ $bold }) => boldStyles($bold)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'inherit')};
  ${({ $fontSize }) => fontStyle($fontSize || '14px')};
  ${({ $textIndent }) => textIndentStyle($textIndent)};
  width: 100%;
`;

export const Link = styled.a<TextProps>`
  ${({ $bold }) => boldStyles($bold)};
  ${({ $fontSize }) => fontStyle($fontSize || 'inherit')};
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
    border-bottom: 1px solid ${({ theme }) => theme.color.hightlight};
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
`;

export const IconLink = styled.a<TextProps>`
  ${({ $bold }) => boldStyles($bold || false)};
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

interface ImageBgProps {
  $url: string;
}

export const ImageBg = styled.div<ImageBgProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ $url }) => $url || ''});
  background-size: cover;
  background-position: center;
`;
