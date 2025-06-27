import { css } from "styled-components";
import { TextAlignProps } from "./types";

export const boldStyles = (bold?: boolean) => css`
  font-weight: ${bold ? '700' : '400'};
`;

export const textAlignStyle = (textAlign?: TextAlignProps) => css`
  text-align: ${textAlign || 'inherit'};
`;

export const fontStyle = (size?: string, family?: 'main' | 'heading', style?: string) => css`
  font-size: ${size};
  ${({ theme }) => (family === 'heading' ? theme.fonts.heading : theme.fonts.main)};
  font-style: ${style || 'normal'};
`;

export const textIndentStyle = (textIndent?: string) => css`
  text-indent: ${textIndent || null};
`;