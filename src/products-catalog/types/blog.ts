export interface BlogSection {
  subtitle: string;
  paragraph: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  mediaCaption?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  department: string;
  image: string;
  featuredImage?: string;
  bannerImage?: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
  featured?: boolean;
}
