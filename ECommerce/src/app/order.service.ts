// src/app/order.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  validateOrder(cart: { product: Product; quantity: number }[]) {
    // Simuler la validation de la commande (par exemple, envoyer au serveur)
    const totalPrice = cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    // Vous pouvez étendre cette logique pour appeler une API backend.
    console.log('Commande validée', cart);
    console.log('Total:', totalPrice);

    return { success: true, total: totalPrice };
  }
}
