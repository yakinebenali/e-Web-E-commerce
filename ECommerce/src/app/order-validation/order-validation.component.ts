import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';  // Service panier
import { OrderService } from '../services/order.service';  // Service des commandes
import { Product } from '../product.model';  // Modèle produit
import { Order } from '../order.model';  // Modèle de commande

@Component({
  selector: 'app-order-validation',
  templateUrl: './order-validation.component.html',
  styleUrls: ['./order-validation.component.scss']
})
export class OrderValidationComponent implements OnInit {

  order: Order | null = null;

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.createOrderFromCart();
  }

  createOrderFromCart(): void {
    const cartItems = this.cartService.getCart();

    if (cartItems.length === 0) {
      alert("Votre panier est vide.");
      return;
    }

  this.order = {
      id: new Date().getTime(),
      customerName: "yakine",
      customerEmail: "yakinebenali5@gmail.com", 
      date: new Date().toISOString(),
      items: cartItems.map(item => ({
        productName: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      })),
      total: this.cartService.getTotal(),
      status: 'en attente' ,
    
    };

 this.orderService.addOrder(this.order);
  }
}
