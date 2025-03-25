import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CartService } from '../services/cart.service';

export const checkoutGuard: CanActivateFn = (route, state) => {
    let cartService  = inject(CartService);
    let cartCount = cartService.cartCount;
    if(cartCount() == 0){
      return false;
    }
  return true;
};
