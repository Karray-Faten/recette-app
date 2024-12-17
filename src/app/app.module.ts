import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';  // Importation du composant AddRecipeComponent
import { RecipeService } from './shared/auth.service';  // Si nécessaire, importez votre service
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardListComponent } from './recipe-card-list/recipe-card-list.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    EditRecipeComponent,
    RecipeCardComponent,
    RecipeCardListComponent,
      ],
  imports: [
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
    NzRateModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireAuthModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [RecipeService, { provide: NZ_I18N, useValue: en_US }],  // Ajoutez le service dans les providers si vous ne l'avez pas décoré avec `providedIn: 'root'`
  bootstrap: [AppComponent]
})
export class AppModule { }
