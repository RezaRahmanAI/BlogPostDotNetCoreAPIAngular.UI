import { Component, OnDestroy, OnInit } from '@angular/core';
import { getCategoryRequest } from '../../../models/get-category-request.model';
import { CategoryService } from '../../../services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  //categories?: getCategoryRequest[];

  categories$?: Observable<getCategoryRequest[]>;
  deleteSubscription?: Subscription;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

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

  onDelete(categoryId: string): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.deleteSubscription = this.categoryService
        .deleteCategory(categoryId)
        .subscribe({
          next: () => {
            this.router.navigate(['/admin/categories']);
          },
          error: (err) => {
            console.error('Error deleting category:', err);           
          },
          complete: () => {
            // Update categories$ observable after deletion, whether successful or not
            this.categories$ = this.categoryService.getAllCategory();
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.deleteSubscription?.unsubscribe();
  }
}
