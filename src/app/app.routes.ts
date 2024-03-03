import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
