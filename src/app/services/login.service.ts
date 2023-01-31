import { HttpClient } from '@angular/common/http';
import { LeadingComment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();
 

  constructor(private http: HttpClient) { } 


  private baseUrl = 'http://localhost:8088';
//current user :which is logged in
  public getCurrentUser(){
    return this.http.get(`${this.baseUrl}/current-user`);
  }
//genenrate token
public generateToken(loginData: any)
{
  return this.http.post(`${this.baseUrl}/generate-token`, loginData)
}
//login user: set token in locslStorage
public loginuser(token: any){
localStorage.setItem('token', token);
return true;
 
}

public isLoggedIn()
{
  let tokenStr= localStorage.getItem("token");
  if (tokenStr == undefined || tokenStr== ''|| tokenStr == null) {
    return false;
  }else {
    return true;
  }
}
//Logut : remove token from local storage
public logout()
{
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return true;

}
// get token 
public getToken()
{
  return localStorage.getItem('token');

}
//set userDetail

public setUser (user: any) {
   localStorage.setItem('user', JSON.stringify (user));

}

//getUser

public getUser()
{
  let userStr=localStorage.getItem("user");
   if(userStr!=null){

return JSON.parse(userStr); 
}else{
  this.logout();
  return null;

}}
//get user role
public getUserRole()
{
  let user=this.getUser();
  return user.authorities[0].authority;
}
}
