import styled from "styled-components";
import { ParagraphProps, TextProps } from "./types";
import { boldStyles, fontStyle, textAlignStyle, textIndentStyle } from "./functions.styled";

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