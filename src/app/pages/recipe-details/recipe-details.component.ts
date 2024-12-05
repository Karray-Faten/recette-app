import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    // Pour une vraie application, vous récupérerez les détails depuis un service ici.
    console.log('Recipe ID:', this.recipeId);
  }
}
