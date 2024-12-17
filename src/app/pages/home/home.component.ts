import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  filteredRecipes: any[] = []; // List to display (filtered or full)
  backupRecipes: any[] = []; // Backup for the original data
  searchQuery: string = ''; // User input for search


  constructor(private router: Router,private afs: AngularFirestore, private recipeService: RecipeService) {}
  recipes: any[] = []; // Array to store recipes

  ngOnInit(): void {
    this.getAllRecipes();
  }

  // Fetch all recipes from Firestore
  getAllRecipes() {
   /* this.afs
      .collection('/recipes')
      .snapshotChanges()
      .subscribe((response:any) => {
        this.recipes = response.map((item:any) => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return { id, ...data }; // Combine ID and data into a single object
        });
        console.log(this.recipes)
      
      });*/
    this.recipeService.getRecipes().subscribe(data =>{
    this.recipes = data
    this.filteredRecipes = [...this.recipes];
    this.backupRecipes = [...this.recipes];
    })
   
   
  }

  navigateToRecipes() {
    this.router.navigate(['/recipes']); // Redirige vers la page de recettes
  }

  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();

    if (query === '') {
      // Restore backup when search bar is empty
      this.filteredRecipes = [...this.backupRecipes];
    } else {
      // Filter recipes based on the search query
      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
      );
    }
  }
}
