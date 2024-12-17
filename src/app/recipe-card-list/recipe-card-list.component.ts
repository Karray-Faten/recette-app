import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.css'],
})
export class RecipeCardListComponent {
  @Input() recipes: any[] = []; // List of recipes
}
