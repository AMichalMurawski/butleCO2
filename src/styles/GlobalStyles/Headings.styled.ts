import styled from "styled-components";
import { boldStyles, fontStyle, textAlignStyle } from "./functions.styled";
import { TextProps } from "./types";

export const H1 = styled.h2<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '3.5rem', 'heading')};
  margin-bottom: 2rem;
`;

export const H2 = styled.h2<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '1.75rem', 'heading')};
  margin-bottom: 2rem;
`;

export const H3 = styled.h3<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '1.5rem', 'heading')};
  margin-bottom: 2rem;
`;

export const H4 = styled.h4<TextProps>`
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '1.25rem', 'heading')};
  margin-bottom: 1.5rem;
`;