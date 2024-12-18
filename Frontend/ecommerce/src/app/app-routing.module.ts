import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './customer/home/home.component';
import { ProductDetailComponent } from './customer/product-detail/product-detail.component';
import { CartComponent } from './customer/cart/cart.component';
import { OrderSuccessComponent } from './customer/order-success/order-success.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductListComponent } from './admin/admin-panel/product-list/product-list.component';
import { AddProductComponent } from './admin/admin-panel/add-product/add-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order/success/:id', component: OrderSuccessComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminPanelComponent, children: [
    { path: 'products', component: ProductListComponent },
    { path: 'add-product', component: AddProductComponent }
  ]
},
{ path: '**', redirectTo: 'admin/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
