import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';  // Service des commandes
import { Order } from '../../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];  // Pour stocker toutes les commandes
  isProcessing: boolean = false;  // Pour gérer le traitement

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();  // Charger toutes les commandes à l'initialisation
  }

  // Récupérer toutes les commandes
  getOrders(): void {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;  // Stocker les commandes dans la variable 'orders'
    });
  }

  // Valider une commande spécifique
  validateOrder(order: Order): void {
    if (!order) {
      alert("Aucune commande disponible à valider.");
      return;
    }

    this.isProcessing = true;

    setTimeout(() => {
      // Mise à jour du statut de la commande
      order.status = 'validée';  // Statut mis à jour
      this.orderService.updateOrder(order);

      this.isProcessing = false;
      alert('Commande validée avec succès!');
    }, 2000);  // Simule un délai de validation
  }
}
