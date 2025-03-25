import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

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

  addToCart(product: Product, quantity: number): void{
    let existingProduct = this.getProductIfExist(product.id);
    if(!existingProduct){
       this.cartItems.update((current)=>[...current, {product: product, quantity: quantity}]);
    }else{
      existingProduct = {...existingProduct, quantity : quantity}
    }
    this.updateLocalStorage()
  }

  updateLocalStorage(): void{
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems()))
  }
  getProductIfExist(id: number): CartItem | null {
    for (const item of this.cartItems()) {
      if (item.product.id === id) {
        return item;
      }
    }
    return null;
  }
  
}
