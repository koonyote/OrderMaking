import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { GroupOrderComponent } from './group-order/group-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    MenuComponent,
    GroupOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
