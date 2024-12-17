import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cards = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 4', description: 'Description for Card 4' },
    { title: 'Card 5', description: 'Description for Card 5' },
  ];

  constructor(private router: Router,private afs: AngularFirestore) {}
  recipes: any[] = []; // Array to store recipes

  ngOnInit(): void {
    this.getAllRecipes();
  }

  // Fetch all recipes from Firestore
  getAllRecipes() {
    this.afs
      .collection('/recipes')
      .snapshotChanges()
      .subscribe((response:any) => {
        this.recipes = response.map((item:any) => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return { id, ...data }; // Combine ID and data into a single object
        });
        console.log(this.recipes)
      });
    
  }

  navigateToRecipes() {
    this.router.navigate(['/recipes']); // Redirige vers la page de recettes
  }
}
