type Author = "caffeine*";
type Genre = "courses" | "general";
interface Resources {
  [key: string]: string;
}

export interface Frontmatter {
  layout: string;
  title: string;
  description: string;
  author: Author;
  genre: Genre;
  pubDate: string;
  resources: Resources[];
}

export interface Posts extends Frontmatter {
  url: string;
}
