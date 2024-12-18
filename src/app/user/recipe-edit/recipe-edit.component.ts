import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: any;
  editForm!: FormGroup; // Initialized in constructor or ngOnInit

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipe = history.state.recipe; // Accessing data from state
    if (this.recipe) {
      this.initializeForm();
    } else {
      console.error('Recipe data is undefined.');
    }
  }

  private initializeForm(): void {
    this.editForm = this.fb.group({
      name: [this.recipe.name, Validators.required],
      description: [this.recipe.description, Validators.required],
      ingredients: [this.recipe.ingredients, Validators.required],
      instructions: [this.recipe.instructions, Validators.required],
      comments: [this.recipe.comments]
    });
  }

  submitEditForm(): void {
    if (this.editForm.valid) {
      const updatedRecipe = {
        id: this.recipe.id,
        name: this.editForm.get('name')?.value,
        image: this.recipe.image,
        description: this.editForm.get('description')?.value,
        ingredients: this.editForm.get('ingredients')?.value,
        instructions: this.editForm.get('instructions')?.value,
        comments : this.editForm.get('comments')?.value,
      };
  
      // Call to updateRecipe service
      this.recipeService.updateRecipe(updatedRecipe).subscribe({
        next: () => {
          this.router.navigateByUrl('/my-recipe')
          console.log('Recipe updated successfully');
        },
        error: (err) => {
          console.error('Error updating recipe:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}