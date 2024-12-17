import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; // Import du module de routage
import { AppComponent } from './app.component';

// Importation des composants client
import { ClientAuthComponent } from './client-auth/client-auth.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { OrderValidationComponent } from './order-validation/order-validation.component';

// Importation des composants admin
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { OrderListComponent } from './admin/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAuthComponent,
    ProductCatalogComponent,
    CartComponent,
    OrderValidationComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ProductListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
