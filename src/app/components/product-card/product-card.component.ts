import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product';
import { LucideAngularModule, ShoppingCart} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import {CommonModule, CurrencyPipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [LucideAngularModule, RouterLink, CurrencyPipe, CommonModule, TruncatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent{
   @Input("product") product!: Product;
   readonly shoppingCart = ShoppingCart;
   toastrService = inject(ToastrService)
   cartService = inject(CartService)

   addToCart(): void{
    if(this.product){
      this.cartService.addToCart(this.product, 1);
      this.toastrService.success('Product added to cart successfully');
    }
   }


}
