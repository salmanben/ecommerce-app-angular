import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../models/product';
import { finalize, Observable } from 'rxjs';

type PaginatedResponse<T> = {
  data: T;
  pages: number;
  items: number;
};
const apiUrl = environment.API;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  currentPage = signal<number>(0);
  error = signal<string>("");
  countPages = signal<number>(0)

  constructor(private http: HttpClient) { }

  getAll(page: number = 1, limit: number = 8) {
    this.isLoading.set(true);
    let params = new HttpParams().set("_page", page.toString()).set("_per_page", limit.toString());
    
    this.http.get<PaginatedResponse<Product[]>>(`${apiUrl}/products`, {params})
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe(
        (response) => {
          this.countPages.set(response.pages);
          this.products.set([...response.data]);
        },
        (error) => {
          console.error(error);
          this.error.set(error);
        }
      );
  }

  getById(id: number) {
    this.isLoading.set(true);
    this.http.get<Product>(`${apiUrl}/products/${id}`)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe(
        (data) => {
          this.products.set([data]);
        },
        (error) => {
          console.error(error);
          this.error.set(error.message || 'An error occurred while fetching the product');
        }
      );
  }
  
  
}
