export type TextAlignProps = 'left' | 'center' | 'right' | 'justify' | 'inherit';
export type TextProps = {
  $bold?: boolean;
  $textAlign?: TextAlignProps;
  $fontSize?: string;
  $fontStyle?: string;
  $textWrap?: string;
};

export type ParagraphProps = TextProps & {
  $textIndent?: string;
};
