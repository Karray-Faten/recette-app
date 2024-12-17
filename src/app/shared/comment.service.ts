import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'http://localhost:3000/recipes'; // Ensure this points to the correct endpoint

  constructor(private http: HttpClient) {}

  // Fetch all comments for a specific recipe
  getComments(recipeId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${recipeId}`);
  }

  // Add a new comment
  addComment(recipeId: string, comment: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${recipeId}`).pipe(
      switchMap((recipe: any) => {
        recipe.comments = recipe.comments || []; // Initialize comments if undefined
        recipe.comments.push(comment); // Add the new comment to the existing array
        return this.http.put<any>(`${this.baseUrl}/${recipeId}`, recipe); // Update the recipe
      })
    );
  }
}
