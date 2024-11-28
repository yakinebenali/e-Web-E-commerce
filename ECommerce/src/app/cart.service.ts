// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './/product.model'; // Assurez-vous d'importer le modèle Product

@Injectable({
  providedIn: 'root' // Cela rend le service accessible à toute l'application
})
export class CartService {
  private cart: { product: Product, quantity: number }[] = []; // Le panier est un tableau d'objets contenant un produit et sa quantité

  constructor() {}

  // Retourner les produits dans le panier
  getCart(): { product: Product, quantity: number }[] {
    return this.cart;
  }

  // Ajouter un produit au panier
  addToCart(product: Product): void {
    // Vérifier si le produit existe déjà dans le panier
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    
    if (existingProduct) {
      // Si le produit existe, augmenter la quantité
      existingProduct.quantity += 1;
    } else {
      // Sinon, ajouter le produit au panier avec une quantité de 1
      this.cart.push({ product, quantity: 1 });
    }
  }

  // Supprimer un produit du panier
  removeFromCart(product: Product): void {
    // Filtrer les éléments dont l'id ne correspond pas à celui du produit à supprimer
    this.cart = this.cart.filter(item => item.product.id !== product.id);
  }

  // Mettre à jour la quantité d'un produit dans le panier
  updateQuantity(product: Product, quantity: number): void {
    const item = this.cart.find(item => item.product.id === product.id);
    
    if (item) {
      item.quantity = quantity;
    }
  }

  // Calculer le prix total du panier
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
