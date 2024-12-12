import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add recipe
  addrecipe(recipe : Recipe) {
    recipe.id = this.afs.createId();
    return this.afs.collection('/recipes').add(recipe);
  }

  // get all recipes
  getAllrecipes() {
    return this.afs.collection('/recipes').snapshotChanges();
  }

  // delete recipe
  deleterecipe(recipe: Recipe): Promise<void> {
    return this.afs.doc('/recipes/' + recipe.id).delete();  // `delete()` retourne une promesse
  }


  updaterecipe(recipe: Recipe): Promise<void> {
    return this.afs.doc(`/recipes/${recipe.id}`).update(recipe); // Mise à jour de la recette dans Firestore
  }


   // Méthode pour récupérer une recette par son ID
   getRecipeById(id: string): Observable<Recipe> {
    return this.afs.collection('/recipes').doc(id).valueChanges() as Observable<Recipe>;
  }

}
