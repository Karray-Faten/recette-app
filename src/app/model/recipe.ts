export interface Recipe {
  id: string;               // ID unique de la recette (généralement généré par Firestore)
  name: string;             // Nom de la recette
  description: string;      // Description de la recette
  image: string;            // Image (sous forme de base64 ou de lien vers Firebase Storage)
  ingredients: string;      // Liste des ingrédients (sous forme de texte)
  instructions: string;     // Instructions de préparation
}
