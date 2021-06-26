import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: "full",
    data: { pageTitle: "Home Page" }
  },
  {
    path: "home",
    component: HomePageComponent,
    data: { pageTitle: "Home Page" }
  },
  {
    path: "cart",
    component: CartPageComponent,
    data: { pageTitle: "Cart Page" }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
