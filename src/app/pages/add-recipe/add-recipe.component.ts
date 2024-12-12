import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
updateRecipe() {
throw new Error('Method not implemented.');
}

  // Déclaration des propriétés pour la recette
  recipe: Recipe = {
    id: '',
    name: '',
    description: '',
    image: '',
    ingredients: '',
    instructions: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  // Fonction pour ajouter une recette
  addRecipe() {
    if (this.recipe.name && this.recipe.description && this.recipe.ingredients && this.recipe.instructions) {
      // Code pour ajouter la recette (appelez un service pour sauvegarder dans Firestore)
      console.log('Recipe added:', this.recipe);
      alert('Recipe added successfully!');
    }
    this.dataService.addrecipe(this.recipe).then(() => {
      alert('Recipe added successfully!');
      this.resetForm();
    }).catch((error) => {
      console.error('Error adding recipe:', error);
      alert('Error adding recipe!');
    });
  }

  // Réinitialiser le formulaire après l'ajout
  resetForm() {
    this.recipe = {
      id: '',
      name: '',
      description: '',
      image: '',
      ingredients: '',
      instructions: ''
    };
  }
}
