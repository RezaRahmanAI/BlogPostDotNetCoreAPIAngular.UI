import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './features/component/nav-manue/home/home.component';
import { CategoriesComponent } from './features/component/Category/categories/categories.component';
import { CategoriesAddComponent } from './features/component/Category/categories-add/categories-add.component';
import { AboutComponent } from './features/component/nav-manue/about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './features/component/Category/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    CategoriesAddComponent,
    EditCategoryComponent,    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
