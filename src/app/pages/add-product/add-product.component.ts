import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  productList: Product[] = [];
  selectedProductList: Product[] = [];

  newProduct: string = ''
  router: any;
  constructor(private product:ProductService) { }
  
  ngOnInit(): void {
    this.product.getProductList().subscribe((dataList: Product[]) => {
      this.productList = dataList;
    });
  }
  
  addNewProduct(newProductName: string) {
    console.log(this.selectedProductList.toString());
    if (this.selectedProductList.length > 0) {
      this.product.updateSelectedProducts(this.selectedProductList);
      this.router.navigateByUrl('/product');
    } else {
      console.log('Plese add your product again');
      
    }
  }
  }
  
  