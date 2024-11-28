// src/app/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: { product: Product; quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    // Simuler la récupération des produits dans le panier depuis le service
    this.cart = this.productService.getCart();
    this.updateTotalPrice();
  }

  addToCart(product: Product) {
    // Ajouter un produit au panier ou augmenter la quantité si déjà présent
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    this.updateTotalPrice();
  }

  removeFromCart(productId: number) {
    // Supprimer un produit du panier
    this.cart = this.cart.filter(item => item.product.id !== productId);
    this.updateTotalPrice();
  }

  updateQuantity(productId: number, quantity: number) {
    // Modifier la quantité d'un produit dans le panier
    const cartItem = this.cart.find(item => item.product.id === productId);
    if (cartItem && quantity > 0) {
      cartItem.quantity = quantity;
    }
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    // Calculer le total du panier
    this.totalPrice = this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  checkout() {
    // Appeler le service de validation de commande
    const result = this.orderService.validateOrder(this.cart);
    if (result.success) {
      alert(`Commande validée. Total: ${result.total} €`);
      // Réinitialiser le panier après la validation de la commande
      this.cart = [];
      this.updateTotalPrice();
    } else {
      alert('Échec de la validation de la commande');
    }
  }
}
