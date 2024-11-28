// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';  


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Parfum Homme', description: 'Parfum pour homme', price: 50, category: 'Homme', imageUrl: 'path_to_image' },
    { id: 2, name: 'Parfum Femme', description: 'Parfum pour femme', price: 60, category: 'Femme', imageUrl: 'path_to_image' },
    // Ajoutez d'autres produits ici
  ];

  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getCart() {
    return this.cart;
  }
}
