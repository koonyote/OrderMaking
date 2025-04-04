import { Component } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'order-group';

  cartItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartCount();
  }

  updateCartCount(): void {
    this.cartItemCount = this.cartService.getTotalItems();
  }
}
