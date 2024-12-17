import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';  // Importer le Router

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: { product: Product, quantity: number }[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCart();  // Charger les données du panier lors de l'initialisation du composant
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCart();  // Récupérer les articles du panier à partir du service
    this.total = this.cartService.getTotal();  // Récupérer le total du panier à partir du service
  }

  updateQuantity(product: Product, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(product, quantity);  // Mettre à jour la quantité du produit dans le panier
      this.loadCart();  // Recharger le panier avec les nouvelles quantités
    } else {
      alert('La quantité doit être supérieure à zéro.');  // Alerte si la quantité est inférieure ou égale à zéro
    }
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);  // Supprimer l'article du panier
    this.loadCart();  // Recharger le panier après la suppression
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty();  // Vérifier si le panier est vide
  }

  // Fonction pour valider la commande et rediriger vers la page de validation de la commande
  validateOrder(): void {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/validate-order']);  // Rediriger vers la page de validation de la commande
    } else {
      alert('Votre panier est vide. Vous devez ajouter des articles pour valider la commande.');
    }
  }
}
