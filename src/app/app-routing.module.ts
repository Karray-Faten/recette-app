import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { RecipeAddFormComponent } from './user/recipe-add-form/recipe-add-form.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'home', component : HomeComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'edit-recipe/:id', component: EditRecipeComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'recipe/add', component: RecipeAddFormComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
