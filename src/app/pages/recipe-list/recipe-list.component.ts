import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private dataService: DataService , private router: Router) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  // Fonction pour récupérer toutes les recettes
  getRecipes() {
    this.dataService.getAllrecipes().subscribe((res: any[]) => {
      this.recipes = res.map(e => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    }, err => {
      console.error('Error fetching recipes', err);
      alert('Error fetching recipes');
    });
  }

  // Fonction pour supprimer une recette
  deleteRecipe(recipe: Recipe): void {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      this.dataService.deleterecipe(recipe).then(() => {
        alert('Recipe deleted successfully');
      }).catch((err: any) => {  // Typage de l'erreur (utilisez 'any' si vous n'avez pas un type spécifique pour l'erreur)
        console.error('Error deleting recipe:', err);
        alert('Error deleting recipe');
      });
    }
  }
  goToDetails(recipeId: string) {
    this.router.navigate(['/recipe-details', recipeId]);  // Redirige vers la page des détails
  }
  editRecipe(recipe: Recipe) {
    this.router.navigate(['/edit-recipe', recipe.id]); // Naviguer vers la page d'édition avec l'ID de la recette
  }

}

