import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeAddFormComponent } from './user/recipe-add-form/recipe-add-form.component';
import { MyRecipeComponent } from './user/my-recipe/my-recipe.component';
import { RecipeEditComponent } from './user/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'home', component : HomeComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'recipe/add', component: RecipeAddFormComponent },
  { path: 'my-recipe', component: MyRecipeComponent },
  { path: 'recipe-edit', component: RecipeEditComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
