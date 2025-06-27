import styled from "styled-components";
import { ParagraphProps, TextProps } from "./types";
import { boldStyles, fontStyle, textAlignStyle, textIndentStyle } from "./functions.styled";

export const P = styled.p<ParagraphProps>`
  ${({ $textAlign }) => textAlignStyle($textAlign || 'inherit')};
  ${({ $fontSize, $fontStyle }) => fontStyle($fontSize || '0.75rem', 'main', $fontStyle)};
  ${({ $bold }) => boldStyles($bold)};
  ${({ $textIndent }) => textIndentStyle($textIndent)};
  width: 100%;
`;

export const Link = styled.a<TextProps>`
  ${({ $bold }) => boldStyles($bold)};
  ${({ $fontSize }) => fontStyle($fontSize || 'inherit')};
  position: relative;
  color: inherit;
  text-decoration: none;
  ${({theme}) => theme.css.transition('text-shadow')}

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.hightlight};
    transform: translate(-50%, 0);
    ${({theme}) => theme.css.transition('width')}
  }

  &:hover {
    text-shadow: 0 0 0.3rem cyan;
    cursor: pointer;

    &::before {
      width: 100%;
    }
  }
`;