// comment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'http://localhost:3000/recipes';  // Ensure this points to the correct endpoint

  constructor(private http: HttpClient) {}

  // Method to add a new comment
  addComment(recipeId: string, comment: any): Observable<any> {
    // First, fetch the recipe by ID
    return this.http.get<any>(`${this.baseUrl}/${recipeId}`).pipe(
      // After getting the recipe, add the new comment to the comments array
      switchMap((recipe:any) => {
        recipe.comments.push(comment); // Add the new comment to the existing array
        return this.http.put<any>(`${this.baseUrl}/${recipeId}`, recipe);  // Update the recipe
      })
    );
  }
}
