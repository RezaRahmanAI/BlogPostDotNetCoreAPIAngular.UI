import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCategoryRequest } from '../models/get-category-request.model';
import { environment } from '../../../environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

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

  getCategoryById(id: string): Observable<getCategoryRequest> {
    return this.http.get<getCategoryRequest>(
      `${environment.apiBasedUrl}/Categories/${id}`
    );
  }

  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest): Observable<getCategoryRequest> {
    return this.http.put<getCategoryRequest>(
      `${environment.apiBasedUrl}/Categories/${id}`,
      updateCategoryRequest
    );
  }
}
