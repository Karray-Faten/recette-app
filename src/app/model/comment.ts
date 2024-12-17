export interface Comment {
  id: string; // Unique ID for the comment
  recipeId: string; // The ID of the associated recipe
  content: string; // The text of the comment
  author: string; // Author of the comment (email or username)
  createdAt: Date; // Timestamp
}
