import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../../../models/add-category-request.model';
import { CategoryService } from '../../../services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrl: './categories-add.component.css',
})
export class CategoriesAddComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.model = {
      name: '',
      urlHandle: '',
    };
  }

  onFormSubmit() {
    console.log(this.model);
    this.addCategorySubscription = this.categoryService
      .addCategory(this.model)
      .subscribe({
        next: () => {
          this.router.navigate(['/admin/categories']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnDestroy() {
    this.addCategorySubscription?.unsubscribe();
  }
}
