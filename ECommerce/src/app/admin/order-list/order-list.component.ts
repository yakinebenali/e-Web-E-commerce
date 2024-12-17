import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';  
import { Order } from '../../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  isProcessing: boolean = false; 

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();  
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders; 
    });
  }

  validateOrder(order: Order): void {
    if (!order) {
      alert("Aucune commande disponible à valider.");
      return;
    }

    this.isProcessing = true;

    setTimeout(() => {
     
      order.status = 'validée';
      this.orderService.updateOrder(order);

      this.isProcessing = false;
      alert('Commande validée avec succès!');
    }, 2000);  
  }
}
