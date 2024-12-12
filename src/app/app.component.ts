import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'recette_app';
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 // ngOnInit() {
    //this.recipeService.getRecipes().subscribe((data) => {
      //this.recipes = data;
   // });
  //}
}
