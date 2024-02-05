import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCategoryRequest } from '../models/get-category-request.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  // addCategory(model: AddCategoryRequest): Observable<void> {
  //   return this.http.post<void>('https://localhost:7207/api/Categories', model);
  // }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBasedUrl}/Categories`, model);
  }

  getAllCategory(): Observable<getCategoryRequest[]> {
    return this.http.get<getCategoryRequest[]>(
      `${environment.apiBasedUrl}/Categories`
    );
  }
}
