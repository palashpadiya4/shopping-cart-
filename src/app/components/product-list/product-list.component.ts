import { Component, OnInit } from '@angular/core';
import { Product } from 'Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

//   productList!: Product;
//   ProductService: any;
//   constructor(private product: ProductService) { }

//   ngOnInit(): void {
//     this.ProductService.getAllProducts().subscribe((data: Product)=> {
//       this.productList = data;
//     });
//   }



selectedProducts: string[] = [];
newProduct: string = ''
constructor() { }

ngOnInit(): void {
  this.selectedProducts = ['Boots', 'Clogs'];
}

addNewProduct(newProductName: string) {
  // add here to the list
}
}

