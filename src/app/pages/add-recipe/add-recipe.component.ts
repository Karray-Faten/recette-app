import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-add-recipe',  // Le sélecteur du composant
  templateUrl: './add-recipe.component.html',  // Le fichier template
  styleUrls: ['./add-recipe.component.css']  // Les styles du composant
})
export class AddRecipeComponent {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', Validators.required],
      ingredients: ['', [Validators.required, Validators.minLength(5)]],
      instructions: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe(this.recipeForm.value);
      console.log('Recipe Data:', this.recipeForm.value);
      alert('Recipe successfully added!');
      this.recipeForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
