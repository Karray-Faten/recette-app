import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { MyRecipeComponent } from './my-recipe/my-recipe.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
;


@NgModule({
  declarations: [
    UserComponent,
    RecipeAddFormComponent,
    RecipeEditComponent,
    MyRecipeComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzTypographyModule,
    ReactiveFormsModule, 
    NzButtonModule, 
    NzFormModule, 
    NzIconModule, 
    NzInputModule,
    NzTableModule,
    FormsModule,

  ]
})
export class UserModule { }
