import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : Product[] = [];
  public grandTotal !: number;
  constructor(private cart : CartService) { }

  ngOnInit(): void {
this.cart.currentSelectedProducts.subscribe(data=>
  this.products=data
  )

  }

}
