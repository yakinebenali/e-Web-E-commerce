import { Injectable } from '@angular/core';
import { Product } from './../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Parfum Homme', description: 'Parfum pour homme', price: 50, category: 'Homme', imageUrl: 'assets/images/R.jpg'  },
    { id: 2, name: 'Parfum Femme', description: 'Parfum pour femme', price: 60, category: 'Femme', imageUrl:'assets/images/R.jpg' },
  ];

  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

   addProduct(newProduct: Product): void {
    newProduct.id = this.generateId();
    this.products.push(newProduct);  
  }
 updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
 deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
 getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

   getCart() {
    return this.cart;
  }
 addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
  }
 removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }

  private generateId(): number {
    return this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
  }
}
