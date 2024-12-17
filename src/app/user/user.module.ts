import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    UserComponent,
    RecipeCardComponent,
    RecipeAddFormComponent
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
    NzInputModule
  ]
})
export class UserModule { }
