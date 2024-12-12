import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipe: Recipe = {
    id: '',
    name: '',
    description: '',
    image: '',
    ingredients: '',
    instructions: ''
  };

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.getRecipeById(recipeId);
    }
  }

  // Récupérer la recette à modifier
  getRecipeById(id: string): void {
    this.dataService.getRecipeById(id).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    }, err => {
      console.error('Error fetching recipe', err);
      alert('Error fetching recipe');
    });
  }

  // Sauvegarder les modifications
  updateRecipe(): void {
    if (this.recipe.name && this.recipe.description && this.recipe.ingredients && this.recipe.instructions) {
      this.dataService.updaterecipe(this.recipe).then(() => {
        alert('Recipe updated successfully');
        this.router.navigate(['/recipes']); // Retour à la liste des recettes
      }).catch((err) => {
        console.error('Error updating recipe:', err);
        alert('Error updating recipe');
      });
    } else {
      alert('Please fill in all the fields');
    }
  }
}
