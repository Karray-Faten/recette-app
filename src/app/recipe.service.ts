import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Assurez-vous que 'providedIn: 'root'' est ajouté ici
})
export class RecipeService {
  private storageKey = 'recipes';  // Clé pour le stockage dans localStorage

  constructor() { }

  // Récupérer toutes les recettes depuis localStorage
  getRecipes() {
    const recipes = localStorage.getItem(this.storageKey);
    return recipes ? JSON.parse(recipes) : [];
  }

  // Ajouter une nouvelle recette dans localStorage
  addRecipe(recipe: any) {
    const recipes = this.getRecipes();
    recipes.push(recipe);
    localStorage.setItem(this.storageKey, JSON.stringify(recipes));
  }
}
