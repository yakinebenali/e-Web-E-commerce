import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ClientAuthComponent } from './client-auth/client-auth.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { OrderValidationComponent } from './order-validation/order-validation.component';


import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { OrderListComponent } from './admin/order-list/order-list.component';

const routes: Routes = [
  // Routes pour le client
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: ClientAuthComponent },
  { path: 'product-catalog', component: ProductCatalogComponent }, 
  { path: 'cart', component: CartComponent }, 
  { path: 'validate-order', component: OrderValidationComponent }, 

  // Routes pour l'admin
  { path: 'admin', component: AdminLoginComponent },
   { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/product-list', component: ProductListComponent },
  { path: 'admin/order-list', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
