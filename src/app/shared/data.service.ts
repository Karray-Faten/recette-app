import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';  // JSON server endpoint

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  loadMyRecipes(email: string): Observable<any> {
    // Clean the email to remove double quotes
    const cleanedEmail = email.replace(/"/g, '');
    
    return this.http.get(`${this.apiUrl}?providerId=${cleanedEmail}`);
  }

  saveRecipe(newRecipe: any) {
    const email = localStorage.getItem('email') || 'null'; // Récupérer l'email de l'utilisateur connecté
    newRecipe.submitterId = email; // Ajouter l'attribut submitterId à la recette
  
    this.http.post(this.apiUrl, newRecipe).subscribe({
      next: (response) => {
        console.log('Recipe saved successfully', response);
      },
      error: (err) => {
        console.error('Error saving recipe', err);
      }
    });
  }


  updateRecipe(recipe: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${recipe.id}`, recipe)
  }

  deleteRecipe(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}
