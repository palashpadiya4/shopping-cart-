import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  updateSelectedProducts(selectedProductList: import("../../Product").Product[]) {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) { }


  private headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  private baseUrl = 'http://localhost:9002/product';

  getProductList(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/list`, { 'headers': this.headers }) 

  }
  
  addNewProduct(): Observable<any[]> {
    return this.httpClient.post<any[]>(`${this.baseUrl}/add`, { 'headers': this.headers }) 

  }
}