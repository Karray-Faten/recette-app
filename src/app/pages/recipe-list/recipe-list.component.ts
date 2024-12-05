import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
      image: 'assets/spaghetti.jpg',
    },
    {
      id: 2,
      name: 'Chicken Curry',
      description: 'A flavorful and spicy chicken curry dish.',
      image: 'assets/chicken-curry.png',
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      description: 'A moist and rich chocolate cake for dessert lovers.',
      image: 'assets/cake-chocolat.jpg',
    },
  ];

  constructor(private router: Router) {}

  goToDetails(recipeId: number) {
    this.router.navigate(['/recipes', recipeId]);
  }
}
