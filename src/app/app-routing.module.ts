import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/component/nav-manue/home/home.component';
import { AboutComponent } from './features/component/nav-manue/about/about.component';
import { CategoriesComponent } from './features/component/Category/categories/categories.component';
import { CategoriesAddComponent } from './features/component/Category/categories-add/categories-add.component';
import { EditCategoryComponent } from './features/component/Category/edit-category/edit-category.component';
import { BlogpostListComponent } from './features/component/BlogPost/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/component/BlogPost/add-blogpost/add-blogpost.component';
//import { NavbarComponent } from './core/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  // Category Path
  { path: 'admin/categories', component: CategoriesComponent },
  { path: 'admin/categories/add', component: CategoriesAddComponent },
  { path: 'admin/categories/edit/:id', component: EditCategoryComponent },

  // BlogPost Path
  { path: 'admin/blogposts', component: BlogpostListComponent },
  { path: 'admin/blogposts/add', component: AddBlogpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
