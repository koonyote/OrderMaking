import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  addToCart(item: any): void {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({...item, quantity: 1});
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}