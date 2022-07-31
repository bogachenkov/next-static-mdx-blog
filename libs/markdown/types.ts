export interface FrontMatter {
  [prop: string]: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  code: string;
}