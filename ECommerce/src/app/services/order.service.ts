import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = []; 

  constructor() {
  this.orders.push(
      {
        id: 1,
        customerName: 'yakine',
        customerEmail: 'yakinebenali5@gmail.com',
        date: new Date().toISOString(), 
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

 addOrder(order: Order): void {
    this.orders.push(order);
  }

    getOrders(): Observable<Order[]> {
    return of(this.orders);   }

   getLatestOrder(): Order | null {
    return this.orders.length > 0 ? this.orders[this.orders.length - 1] : null;
  }
  updateOrder(updatedOrder: Order): void {
    const index = this.orders.findIndex(order => order.id === updatedOrder.id);
    if (index !== -1) {
      this.orders[index] = updatedOrder;
    }
  }
}
