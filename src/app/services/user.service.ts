import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( 
    private http:HttpClient
  ) { }

  private baseUrl = 'http://localhost:8088';
//add user
public addUser(user:any ) {
  return this.http.post(`${this.baseUrl}/user/ `,user);
}


}
