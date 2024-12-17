import { Injectable } from '@angular/core';
import { Product } from './../product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  addToCart(product: Product): void {
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
         existingProduct.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }
  getCart() {
    return this.cart;
  }

   updateQuantity(product: Product, quantity: number): void {
    if (quantity <= 0) {
      console.error('La quantité doit être positive et non nulle.');
      return;  }

    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = quantity;
    }
  }
  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(item => item.product.id !== product.id);
  }
  getTotal(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
 isEmpty(): boolean {
    return this.cart.length === 0;
  }

    clearCart(): void {
    this.cart = [];
  }
}
