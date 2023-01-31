import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersidebarComponent } from './pages/user/usersidebar/usersidebar.component';
import { UserprofileComponent } from './pages/user/userprofile/userprofile.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './cart/cart.component';
import { UserwelcomeComponent } from './pages/user/userwelcome/userwelcome.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CheckoutComponent } from './pages/products/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    UsersidebarComponent,
    UserprofileComponent,
    ProductListComponent,
    ProductsComponent,
    HomeComponent,
    CartComponent,
    UserwelcomeComponent,
    FooterComponent,
    AddProductComponent,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
