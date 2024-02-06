import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/component/nav-manue/home/home.component';
import { AboutComponent } from './features/component/nav-manue/about/about.component';
import { CategoriesComponent } from './features/component/Category/categories/categories.component';
import { CategoriesAddComponent } from './features/component/Category/categories-add/categories-add.component';
import { EditCategoryComponent } from './features/component/Category/edit-category/edit-category.component';
//import { NavbarComponent } from './core/navbar/navbar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin/categories', component: CategoriesComponent },
  { path: 'admin/categories/add', component: CategoriesAddComponent },
  { path: 'admin/categories/edit/:id', component: EditCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
