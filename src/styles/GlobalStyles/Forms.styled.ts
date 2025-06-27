import styled from "styled-components";
import { ParagraphProps } from "./types";
import { boldStyles, fontStyle, textAlignStyle, textIndentStyle } from "./functions.styled";

export const Label = styled.label<ParagraphProps>`
  ${({ $textAlign }) => textAlignStyle($textAlign || 'inherit')};
  ${({ $fontSize }) => fontStyle($fontSize || '0.75rem', 'heading')};
  ${({ $bold }) => boldStyles($bold)};
  ${({ $textIndent }) => textIndentStyle($textIndent)};
`

export const Input = styled.input<ParagraphProps>`
  ${({ $textAlign }) => textAlignStyle($textAlign || 'inherit')};
  ${({ $fontSize }) => fontStyle($fontSize || '0.72rem', 'main')};
  ${({ $bold }) => boldStyles($bold)};
  ${({ $textIndent }) => textIndentStyle($textIndent)};
`

