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
    this.loadCart();   }

  loadCart(): void {
    this.cartItems = this.cartService.getCart();  
    this.total = this.cartService.getTotal(); 
  }

  updateQuantity(product: Product, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(product, quantity); 
      this.loadCart();
    } else {
      alert('La quantité doit être supérieure à zéro.');     }
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product); 
    this.loadCart();  
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty(); 
  }

 
  validateOrder(): void {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/validate-order']);     } else {
      alert('Votre panier est vide. Vous devez ajouter des articles pour valider la commande.');
    }
  }
}
