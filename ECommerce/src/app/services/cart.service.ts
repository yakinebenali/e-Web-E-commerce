import { Injectable } from '@angular/core';
import { Product } from './../product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  constructor() {}

  // Ajouter un produit au panier
  addToCart(product: Product): void {
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      // Si le produit existe déjà dans le panier, augmenter la quantité
      existingProduct.quantity++;
    } else {
      // Sinon, ajouter le produit au panier avec une quantité de 1
      this.cart.push({ product, quantity: 1 });
    }
  }

  // Obtenir tous les produits du panier
  getCart() {
    return this.cart;
  }

  // Modifier la quantité d'un produit dans le panier
  updateQuantity(product: Product, quantity: number): void {
    // Vérifier si la quantité est valide
    if (quantity <= 0) {
      console.error('La quantité doit être positive et non nulle.');
      return; // Empêcher la mise à zéro ou la quantité négative
    }

    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = quantity;
    }
  }

  // Supprimer un produit du panier
  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(item => item.product.id !== product.id);
  }

  // Calculer le total du panier
  getTotal(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  // Vérifier si le panier est vide
  isEmpty(): boolean {
    return this.cart.length === 0;
  }

  // Vider le panier
  clearCart(): void {
    this.cart = [];
  }
}
