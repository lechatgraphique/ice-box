import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ListProductsComponent } from './areas/components/product/list-products/list-products.component';
import { ProductComponent } from './areas/components/product/product/product.component';
import { SearchbarComponent } from './core/components/searchbar/searchbar.component';
import { FilterComponent } from './core/components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    ProductComponent,
    SearchbarComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
