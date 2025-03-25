import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productService = inject(ProductService);
  products = this.productService.products;
  isLoading = this.productService.isLoading;
  error = this.productService.error;

  ngOnInit() {
    this.productService.getAll();
  }

}
