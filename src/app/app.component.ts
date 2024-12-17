import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/auth.service';
import { TokenService } from './shared/token-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'recette_app';
  recipes: any[] = [];
  token: boolean = false; // Reactive connection state
  constructor(private recipeService: RecipeService, private tokenService:TokenService) {
    
  }

    ngOnInit(): void {
      // You can check if the user is authenticated using the tokenService
      const tokenInLocalStorage = localStorage.getItem('token');
      if (tokenInLocalStorage === null) {
        // Token is not found, set it to false
        this.tokenService.setConnectionStatus(false);
      } else {
        // Token exists, set BehaviorSubject from localStorage value
        this.tokenService.setConnectionStatus(tokenInLocalStorage === 'true');
      }
  
      // Subscribe to the token status
      this.tokenService.connected$.subscribe((status) => {
        this.token = status;
        console.log('AppComponent - Token status updated:', this.token); // Debug log
      });
    //this.recipeService.getRecipes().subscribe((data) => {
      //this.recipes = data;
   // });
  }
}
