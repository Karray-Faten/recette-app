import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: RecipeService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la recette à partir de l'URL
    const recipeId = this.route.snapshot.paramMap.get('id')!;

    // Charger les détails de la recette à partir du service
    this.dataService.getRecipeById(recipeId).subscribe((data:any) => {
      this.recipe = data;
    });
  }
}
