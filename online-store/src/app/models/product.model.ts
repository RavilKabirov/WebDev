export interface product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  likes: number;
  categoryId: number;
  link: string;
  likedByUser: boolean;
}