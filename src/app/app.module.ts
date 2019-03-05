import { CategoryService } from './category.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFireAuthModule} from '@angular/fire/auth'
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    
    RouterModule.forRoot([
        { path: '' , component: HomeComponent},
        { path: 'products' , component: ProductsComponent},
        { path: 'login' , component: LoginComponent},
        { path: 'shopping-cart' , component: ShoppingCartComponent},

        { path: 'check-out' , component: CheckOutComponent, canActivate:[AuthGuardService]},
        { path: 'order-success' , component: OrderSuccessComponent , canActivate:[AuthGuardService]},
        { path: 'my-order' , component: MyOrderComponent, canActivate:[AuthGuardService]},

        { path: 'admin/products' , component:AdminProductsComponent, canActivate:[AuthGuardService] },
        { path: 'admin/orders' , component:AdminOrdersComponent,  canActivate:[AuthGuardService]},     
        { path: 'admin/products/new' , component:ProductFormComponent, canActivate:[AuthGuardService] } 
      ]),

      NgbModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    AuthService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
