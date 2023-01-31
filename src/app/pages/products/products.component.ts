import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/Product';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  selectedProductList: Product[] = [];
  constructor(
    private router: Router,
    private product: ProductService,
    private cart: CartService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.product.getProductList().subscribe((dataList) => {
      this.productList = dataList;
    });
  }

  goToCart() {
    console.log(this.selectedProductList.toString());
    if (this.selectedProductList.length > 0) {
      this.cart.updateSelectedProducts(this.selectedProductList);
      this.router.navigateByUrl('/cart');
    } else {
      console.log('The cart is empty please select your products');
      
    }
    
  }

  addtoCart(selectedproduct: Product) {
    const doExist = this.selectedProductList.some((product: Product) => {
      return product.product_id === selectedproduct.product_id;
    });

    if (doExist) {
   
      Swal.fire('success done !!', "added product to cart" );
    } else {
      this.selectedProductList.push(selectedproduct);
    }
  }
}
