export enum DocumentTextType {
  Paragraph = 'paragraph',
  List = 'list',
}

export type DocumentSectionProps =
  | [DocumentTextType.Paragraph, string]
  | [DocumentTextType.List, string[]];

export interface DocumentProps {
  title: string;
  contents: {
    subtitle: string;
    section: DocumentSectionProps[];
  }[];
  hideSection: boolean;
} 