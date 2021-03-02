import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './areas/components/product/list-products/list-products.component';
import { ProductComponent } from './areas/components/product/product/product.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'products/1', component: ProductComponent} /* TODO: Route temporaire pour la creation du componant */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
