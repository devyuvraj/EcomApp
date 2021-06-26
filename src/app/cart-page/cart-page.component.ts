import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCart } from '../shared/model/add-to-cart';
import { GeneralService } from '../shared/service/general.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartId: number = 0;
  cartModel = new AddToCart();
  fileStorageUrl: string = "assets/img";

  constructor(
    private generalService: GeneralService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails() {
    this.cartModel = JSON.parse(localStorage.getItem('cart')); //get from localstorage
    this.calculateFinalTotal();

    // this.generalService.getCartItems().subscribe(results => {
    //   if (results.statusCode == 200) {
    //     this.cartModel = results.data;
    //     console.log(this.cartModel);
    //   }
    //   else {
    //     this.cartModel = new AddToCart();
    //   }
    // });
  }

  cartQtyChange(event, i) {
    this.cartModel.cartItemList[i].total = Number((this.cartModel.cartItemList[i].productPrice * event).toFixed(2));
    this.calculateFinalTotal();
  }

  calculateFinalTotal() {
    let sub_total = 0;
    this.cartModel.cartItemList.forEach(item => {
      sub_total += Number(item.total);
    });
    this.cartModel.subtotal = sub_total;

    this.cartModel.totalAmount = (Number(this.cartModel.subtotal));
    this.cartModel.totalAmount.toFixed(2);
  }

  deleteItemFromCart(i) {
    this.cartModel.cartItemList.splice(i, 1);
    this.calculateFinalTotal();
    if(this.cartModel.cartItemList.length < 1){
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

}
