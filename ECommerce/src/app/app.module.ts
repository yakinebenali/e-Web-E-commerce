import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAuthComponent } from './client-auth/client-auth.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderValidationComponent } from './order-validation/order-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAuthComponent,
    ProductCatalogComponent,
    CartComponent,
    OrderReviewComponent,
    AdminAuthComponent,
    ProductManagementComponent,
    OrderValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
