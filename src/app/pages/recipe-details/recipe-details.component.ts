import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any = null; // Propriété pour une recette spécifique
  recipeId: number | null = null;

  recipes = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
      image: 'assets/spaghetti.jpg',
      ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onions', 'Garlic'],
      instructions: 'Cook pasta. Prepare sauce. Combine and serve.'
    },
    {
      id: 2,
      name: 'Chicken Curry',
      description: 'A flavorful and spicy chicken curry dish.',
      image: 'assets/chicken-curry.png',
      ingredients: ['Chicken', 'Coconut milk', 'Curry powder', 'Onions', 'Garlic'],
      instructions: 'Cook chicken. Add spices and coconut milk. Simmer and serve.'
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      description: 'A moist and rich chocolate cake for dessert lovers.',
      image: 'assets/cake-chocolat.jpg',
      ingredients: ['Flour', 'Sugar', 'Cocoa powder', 'Eggs', 'Butter'],
      instructions: 'Mix ingredients. Bake. Frost and enjoy.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de la recette depuis l'URL
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));

    // Trouver la recette correspondante
    this.recipe = this.recipes.find(r => r.id === this.recipeId);
  }
}
