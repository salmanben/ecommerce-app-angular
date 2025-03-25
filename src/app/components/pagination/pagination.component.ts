import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent{
  productService = inject(ProductService);
  currentPage = 1;
  countPages = computed(() => 
    Array.from({ length: this.productService.countPages() }, (_, i) => i + 1)
  );
  readonly chevronRight = ChevronRight;
  readonly chevronLeft = ChevronLeft;


  changePage(page: number){
    this.currentPage = page;
    this.productService.getAll(page);
  }
}
