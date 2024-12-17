import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css']
})
export class MyRecipeComponent implements OnInit {
  email = localStorage.getItem('email') || 'null';
  recipes: any;
  apiUrl = 'https://localhost:3000/recipes';
  columns: any[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text: string) => `<img src="${text}" alt="Recipe Image" style="width: 50px; height: auto;">`
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: any) => `
        <button nz-button nzType="link" (click)="viewRecipe(record)">View</button>
        <button nz-button nzType="link" (click)="editRecipe(record)">Edit</button>
        <button nz-button nzType="link" (click)="deleteRecipe(record.id)">Delete</button>
      `
    }
  ];

  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipes(this.email);
  }


  loadRecipes(email: string): void {
    this.recipeService.loadMyRecipes(email).subscribe(
      (recipes: any) => {
        this.recipes = recipes;
      },
      (error) => {
        console.error('Error loading recipes:', error);
        alert('Error loading recipes, please try again later.');
      }
    );
  }

  viewRecipe(recipe: any): void {
    console.log('Viewing Recipe:', recipe);
    // Implement modal logic or redirection
  }

  editRecipe(recipe:any): void {
    // Assuming you have a router navigation with data
    this.router.navigate(['recipe-edit'], { state: { recipe } });
  }

  deleteRecipe(recipeId: string): void {
    this.recipeService.deleteRecipe(recipeId).subscribe({
      next: () => {
        console.log('Recipe deleted successfully');
        this.loadRecipes(this.email); // Reload recipes after deletion
      },
      error: (err) => {
        console.error('Error deleting recipe:', err);
        // Optionally handle error
      }
    });
  }
}
