import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItems = signal<CartItem[]>([]);
  cartCount = computed(()=> this.cartItems().length);

  constructor() { 
    this.fetchData();
  }

  fetchData(): void{
    if(localStorage.getItem("cartItems")){
      this.cartItems.set(JSON.parse(localStorage.getItem("cartItems")!));
    }
    
  }
}
