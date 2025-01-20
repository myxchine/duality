interface Site {
  title: string;
  url: string;
  excerpt: string;
  content: string;
  image: string;
  tags?: string[];
  slug: string;
  date: string;
}

interface Article {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}
