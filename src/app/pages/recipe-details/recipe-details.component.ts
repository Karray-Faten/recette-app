import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/shared/data.service';
import { CommentService } from 'src/app/shared/comment.service';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  verified = !!localStorage.getItem('email'); // Check if user email exists
  recipe: Recipe | null = null;
  comments: Comment[] = []; // Array to store comments
  newComment: Comment = {
    content: '',
    author: localStorage.getItem('email') || 'Anonymous',
    createdAt: new Date(),
    id: '',
    recipeId: '',
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: RecipeService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.dataService.getRecipeById(recipeId).subscribe(
        (recipe) => {
          this.recipe = recipe;
          this.newComment.recipeId = recipe.id; // Assign recipe ID for new comments
          this.fetchComments(recipe.id);
        },
        (error) => {
          console.error('Error fetching recipe:', error);
          // Handle error appropriately, e.g., show a message to the user
        }
      );
    }
  }

  // Fetch all comments for the recipe
  fetchComments(recipeId: string): void {
    this.commentService.getComments(recipeId).subscribe(
      (recipe:any) => {
        this.comments = recipe.comments || [];
      },
      (error) => {
        console.error('Error fetching comments:', error);
        // Handle error appropriately
      }
    );
  }

  // Add a new comment
  addComment(): void {
    if (!this.newComment.content.trim()) {
      return; // Prevent empty comments
    }

    const commentToAdd = {
      ...this.newComment,
      createdAt: new Date(),
    };

    if (this.recipe && this.recipe.id) {
      this.commentService.addComment(this.recipe.id, commentToAdd).subscribe(
        () => {
          this.comments.push(commentToAdd); // Update the local array
          this.newComment.content = ''; // Clear the input field
        },
        (error) => {
          console.error('Error adding comment:', error);
          // Handle error appropriately, e.g., show a message to the user
        }
      );
    }
  }
}
