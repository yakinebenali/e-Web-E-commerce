import { Injectable } from '@angular/core';
import { Product } from './../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Parfum Homme', description: 'Parfum pour homme', price: 50, category: 'Homme', imageUrl: 'R.jpg' },
    { id: 2, name: 'Parfum Femme', description: 'Parfum pour femme', price: 60, category: 'Femme', imageUrl: 'R.jpg' },
  ];

  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  // --- Récupérer tous les produits ---
  getProducts(): Product[] {
    return this.products;
  }

  // --- Ajouter un nouveau produit ---
  addProduct(newProduct: Product): void {
    newProduct.id = this.generateId(); // Générer un ID unique
    this.products.push(newProduct);  // Ajouter le produit à la liste
  }
  

  // --- Modifier un produit existant ---
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  // --- Supprimer un produit ---
  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  // --- Récupérer un produit par ID ---
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  // --- Récupérer le panier ---
  getCart() {
    return this.cart;
  }

  // --- Ajouter un produit au panier ---
  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
  }

  // --- Supprimer un produit du panier ---
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }

  // Méthode privée pour générer un ID unique
  private generateId(): number {
    return this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
  }
}
