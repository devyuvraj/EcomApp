import { Component, OnInit } from '@angular/core';
import { AddToCart } from '../shared/model/add-to-cart';
import { GeneralService } from '../shared/service/general.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  productAddToCart = new AddToCart();
  productsLists: any[] = [];
  fileStorageUrl: string = "assets/img";
  isSubmit: boolean = false;
  selectedProductSize: string = "";
  selectedProductColor: string = "";

  constructor(
    private generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.getProductsList(); //call on init
  }

  /**
   * get products dumy list from json
   */
  getProductsList() {
    this.generalService.getProductsList().subscribe(results => {
      if (results.statusCode == 200) {
        this.productsLists = results.data;
      }
      else {
        this.productsLists = [];
      }
    });
  }

  /**
   * on change product size
   */
  onSelecteSize(event) {
    this.selectedProductSize = event.target.options[event.target.options.selectedIndex].text;
    // console.log(this.selectedProductSize);
  }
  /**
   * on change product color
   */
  onSelecteColor(event) {
    this.selectedProductColor = event.target.options[event.target.options.selectedIndex].text;
    // console.log(this.selectedProductColor);
  }

  /**
   * on click add to cart
   */
  addProduct(item: any) {
    if (this.selectedProductSize != '' && this.selectedProductColor != '') {
      this.isSubmit = true;
      this.productAddToCart.cartId = 1;
      this.productAddToCart.cartItemList.push({
        productId: item.productId,
        productImage: item.productImage,
        productPrice: item.productPrice,
        qty: 1,
        total: item.productPrice,
        productName: item.productName,
        productDescription: item.productDescription,
        productRating: item.productRating,
        productSizes: this.selectedProductSize,
        productColors: this.selectedProductColor
      });
      // console.log(this.productAddToCart);

      localStorage.setItem('cart', JSON.stringify(this.productAddToCart)); //store in localstorage
      alert('product add to cart successfully'); //alert after add in local storage
      this.isSubmit = false;
    }
    else {
      this.isSubmit = false;
      if (this.selectedProductSize == " ") {
        alert('Select product size!');
      }
      if (this.selectedProductColor != " ") {
        alert('Select product color!');
      }
    }
  }
}
