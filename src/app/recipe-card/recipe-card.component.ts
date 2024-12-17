import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() rating: number = 0;
  @Input() isHeartActivated: boolean = false;

  toggleHeart(): void {
    this.isHeartActivated = !this.isHeartActivated;
  }
}