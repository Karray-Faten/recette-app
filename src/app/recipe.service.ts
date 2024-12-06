import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Assurez-vous que 'providedIn: 'root'' est ajouté ici
})
export class RecipeService {
  private recipes = [
    {
      id: 1,
      name: 'Cheesecake',
      description: 'Delicious creamy cheesecake',
      image: 'assets/cheesecake.jpg',
      ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Butter', 'Graham crackers'],
      instructions: 'Mix ingredients, bake at 180°C for 30 minutes, and chill.'
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta dish',
      image: 'assets/carbonara.jpg',
      ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Pancetta', 'Black pepper'],
      instructions: 'Cook spaghetti, mix with eggs, parmesan, and pancetta.'
    },
    {
      id: 3,
      name: 'Tacos',
      description: 'Spicy Mexican tacos with fresh ingredients',
      image: 'assets/tacos.jpg',
      ingredients: ['Tortillas', 'Ground beef', 'Cheese', 'Lettuce', 'Salsa'],
      instructions: 'Assemble tortillas with beef, cheese, lettuce, and salsa.'
    }
  ];

  constructor() {}

  getRecipeById(id: number) {
    return this.recipes.find(recipe => recipe.id === id) || null;
  }
}
