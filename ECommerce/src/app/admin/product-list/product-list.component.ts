import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', description: '', price: 0, category: '', imageUrl: '' };
  editingProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.addProduct({ ...this.newProduct });
      this.newProduct = { id: 0, name: '', description: '', price: 0, category: '', imageUrl: '' };
      this.loadProducts();
    } else {
      alert('Veuillez remplir correctement les champs.');
    }
  }

  editProduct(product: Product): void {
    this.editingProduct = { ...product };
  }

  saveEdit(): void {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct);
      this.editingProduct = null;
      this.loadProducts();
    }
  }

  cancelEdit(): void {
    this.editingProduct = null;
  }

  deleteProduct(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.productService.deleteProduct(id);
      this.loadProducts();
    }
  }
}
