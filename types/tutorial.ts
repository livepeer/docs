export interface Tutorial {
  title: string;
  longTitle: string;
  description: string;
  level: string;
  category: string;
  author: Author;
  createdAt: string;
  minutesRead: number;
  href: string;
  theme: Theme;
}

export interface Author {
  name: string;
  image: string;
}

export interface Theme {
  breadcrumb: boolean;
  footer: boolean;
  sidebar: boolean;
  toc: boolean;
  pagination: boolean;
}
