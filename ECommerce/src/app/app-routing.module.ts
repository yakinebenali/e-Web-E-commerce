import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAuthComponent } from './client-auth/client-auth.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { OrderValidationComponent } from './order-validation/order-validation.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: ClientAuthComponent }, // Page d'authentification
  { path: 'product-catalog', component: ProductCatalogComponent },
  { path: 'validate-order', component: OrderValidationComponent },
  { path: 'cart', component: CartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
