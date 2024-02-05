import { Component, OnInit } from '@angular/core';
import { getCategoryRequest } from '../../../models/get-category-request.model';
import { CategoryService } from '../../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  //categories?: getCategoryRequest[];

  categories$ ?: Observable<getCategoryRequest[]>;

  constructor(private categoryService: CategoryService) {}

  // ngOnInit(): void {
  //   this.categoryService.getAllCategory().subscribe({
  //     next: (response) => {
  //       this.categories = response;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  ngOnInit(): void {
      this.categories$ = this.categoryService.getAllCategory();
  }
}
