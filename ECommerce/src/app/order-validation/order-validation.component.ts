import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';  // Service panier
import { OrderService } from '../order.service';  // Service des commandes
import { Product } from '../product.model';  // Modèle produit
import { Order } from '../order.model';  // Modèle de commande

@Component({
  selector: 'app-order-validation',
  templateUrl: './order-validation.component.html',
  styleUrls: ['./order-validation.component.scss']
})
export class OrderValidationComponent implements OnInit {

  order: Order | null = null;
  isProcessing: boolean = false;

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.createOrderFromCart();
  }

  // Créer une commande à partir des produits dans le panier
  createOrderFromCart(): void {
    const cartItems = this.cartService.getCart(); // Récupérer les produits du panier

    if (cartItems.length === 0) {
      alert("Votre panier est vide.");
      return;
    }

    // Créer une nouvelle commande avec les produits du panier
    this.order = {
      id: new Date().getTime(),  // Utilisation d'un ID temporaire pour la commande
      customerName: "yakine", // Exemple de nom du client, vous pouvez le personnaliser
      customerEmail: "yakinebenali5@gmail.com", // Exemple d'email
      date: new Date().toISOString(),
      items: cartItems.map(item => ({
        productName: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      })),
      total: this.cartService.getTotal(),
      status: 'en attente'  // Statut initial de la commande
    };

    // Vous pouvez ajouter cette commande à la liste des commandes
    this.orderService.addOrder(this.order);
  }

  // Valider la commande
  validateOrder(): void {
    if (!this.order) {
      alert("Aucune commande disponible à valider.");
      return;
    }

    this.isProcessing = true;

    setTimeout(() => {
      // Mise à jour du statut de la commande
      this.order!.status = 'validée';  // Statut mis à jour
      this.orderService.updateOrder(this.order!);

      this.isProcessing = false;
      alert('Commande validée avec succès!');
      this.cartService.clearCart();  // Vider le panier après la validation
    }, 2000);  // Simule un délai de validation
  }
}
