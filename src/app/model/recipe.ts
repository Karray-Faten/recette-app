export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string;
  instructions: string;
  rating: number;
  comments: any[];
  submitterId: string;
}
