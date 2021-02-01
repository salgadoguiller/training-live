export interface News {
  id: number;
  title: string;
  description: string;
  short_description: string;
  image_url: string;
}

export interface NewsResponse {
  meta: any;
  items: News[];
}
