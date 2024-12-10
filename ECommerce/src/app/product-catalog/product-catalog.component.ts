import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = []; // Propriété pour les produits filtrés
  searchQuery: string = ''; // Propriété pour la recherche

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products; // Initialisation de filteredProducts
  }

  // Méthode pour filtrer les produits en fonction de searchQuery
  filterProducts(): void {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;}
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
