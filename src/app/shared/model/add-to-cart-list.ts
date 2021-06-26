export class AddToCartList {
  productId: number;
  productImage: string;
  productPrice: number;
  qty: number;
  total: number;
  productName: string;
  productDescription: string;
  productRating: number;
  productSizes: string;
  productColors: string;
  constructor() {
    this.productId = 0;
    this.productImage = "";
    this.productPrice = 0.0;
    this.qty = 0;
    this.total = 0.0;
    this.productName = "";
    this.productDescription = "";
    this.productRating = 0;
    this.productSizes = "";
    this.productColors = "";
  }
}
