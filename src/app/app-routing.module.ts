import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { GroupOrderComponent } from './group-order/group-order.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }, 
  { path: '', component: MenuComponent }, 
  { path: 'group-order', component: GroupOrderComponent },
  { path: 'cart', component: CartComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
