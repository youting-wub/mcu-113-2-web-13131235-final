import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductFormPageComponent } from './product-form-page/product-form-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'product/view/:id', component: ProductDetailPageComponent },
  { path: 'product/form/:id', component: ProductFormPageComponent },
  { path: 'shopping', component: ShoppingCarComponent },
];
