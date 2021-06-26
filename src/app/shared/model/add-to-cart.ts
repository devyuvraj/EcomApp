import { AddToCartList } from "./add-to-cart-list";

export class AddToCart {
  cartId: number;
  totalAmount: number;
  subtotal: number;
  cartItemList: AddToCartList[];
  constructor() {
    this.cartId = 0;
    this.totalAmount = 0.0;
    this.subtotal = 0.0;
    this.cartItemList = new Array <AddToCartList>();
  }
}
