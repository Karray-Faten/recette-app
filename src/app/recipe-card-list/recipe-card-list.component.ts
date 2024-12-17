import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.css'],
})
export class RecipeCardListComponent {
  @Input() recipes: any[] = []; 

  constructor(private router: Router){

  }

  goto(id:any){
    this.router.navigate(['/recipe-details', id]);
  }
}
