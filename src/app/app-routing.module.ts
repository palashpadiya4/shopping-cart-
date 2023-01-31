import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutComponent } from './pages/products/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserwelcomeComponent } from './pages/user/userwelcome/userwelcome.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: 'userprofile',
        component: ProfileComponent,
      },
      { path: 'cart', component: CartComponent },
      {
        path: '',
        component: UserwelcomeComponent,
      },
      {
        path: 'product',
        component: ProductsComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'addproduct',
        component: AddProductComponent,
      },
      { path: 'cart', component: CartComponent },
      {
        path: 'product',
        component: ProductsComponent,
      },
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
