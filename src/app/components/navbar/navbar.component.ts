import { Component, inject} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CreditCard, House, LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  cartService = inject(CartService);
  readonly cartCount = this.cartService.cartCount

  readonly house = House;
  readonly shoppingCart = ShoppingCart;
  readonly creditCard = CreditCard;

}
