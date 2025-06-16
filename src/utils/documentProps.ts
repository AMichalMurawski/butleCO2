export enum DocumentTextType {
  Title = 'title',
  Subtitle = 'subtitle',
  Paragraph = 'paragraph',
  List = 'list',
}

export type DocumentProps =
  | [Exclude<DocumentTextType, DocumentTextType.List>, string]
  | [DocumentTextType.List, string[]];
