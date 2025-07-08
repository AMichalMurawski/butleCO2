import styled from 'styled-components';
import { boldStyles, fontStyle, textAlignStyle, textWrapStyle } from './functions.styled';
import { TextProps } from './types';

export const H1 = styled.h2<TextProps>`
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '3.5rem', 'heading')};
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textWrap }) => textWrapStyle($textWrap)};
  margin-bottom: 2rem;
`;

export const H2 = styled.h2<TextProps>`
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '1.75rem', 'heading')};
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textWrap }) => textWrapStyle($textWrap)};
  margin-bottom: 2rem;
`;

export const H3 = styled.h3<TextProps>`
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '1.5rem', 'heading')};
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textWrap }) => textWrapStyle($textWrap)};
  margin-bottom: 2rem;
`;

export const H4 = styled.h4<TextProps>`
  ${({ $textAlign }) => textAlignStyle($textAlign || 'center')};
  ${({ $fontSize }) => fontStyle($fontSize || '1.25rem', 'heading')};
  ${({ $bold }) => boldStyles($bold || true)};
  ${({ $textWrap }) => textWrapStyle($textWrap)};
  margin-bottom: 1.5rem;
`;
