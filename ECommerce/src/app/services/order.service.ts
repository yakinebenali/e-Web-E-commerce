import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  // Import de 'of' pour convertir en Observable
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];  // Liste des commandes

  constructor() {
    // Ajout de quelques données simulées au démarrage pour les tests
    this.orders.push(
      {
        id: 1,
        customerName: 'yakine',
        customerEmail: 'yakinebenali5@gmail.com',
        date: new Date().toISOString(),  // Convertir la date en string
        items: [
          { productName: 'Parfum Femme', quantity: 2, price: 150 },
          { productName: 'Parfum Homme', quantity: 2, price: 50 },
        ],
        total: 100,
        status: 'en attente',
    
      },
      {
        id: 2,
        customerName: 'Maissa',
        customerEmail: 'maissa@gmail.com',
        date: new Date().toISOString(),
        items: [
          { productName: 'Parfum Femme', quantity: 1, price: 30 },
        ],
        total: 30,
        status: 'en attente'
      }
    );
  }

  // Ajouter une commande
  addOrder(order: Order): void {
    this.orders.push(order);
  }

  // Récupérer toutes les commandes (retourne un Observable)
  getOrders(): Observable<Order[]> {
    return of(this.orders);  // Utilisation de 'of' pour renvoyer un Observable contenant la liste des commandes
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
