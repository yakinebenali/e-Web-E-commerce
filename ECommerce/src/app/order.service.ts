import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];  // Liste des commandes

  constructor() {}

  // Ajouter une commande
  addOrder(order: Order): void {
    this.orders.push(order);
  }

  // Récupérer toutes les commandes
  getOrders(): Order[] {
    return this.orders;
  }

  // Récupérer la dernière commande, si disponible
  getLatestOrder(): Order | null {
    return this.orders.length > 0 ? this.orders[this.orders.length - 1] : null;
  }

  // Mettre à jour une commande existante
  updateOrder(updatedOrder: Order): void {
    const index = this.orders.findIndex(order => order.id === updatedOrder.id);
    if (index !== -1) {
      // Mise à jour de la commande dans la liste
      this.orders[index] = updatedOrder;
    }
  }
}
