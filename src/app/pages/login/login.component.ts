import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  constructor(private snack: MatSnackBar, private login: LoginService,private router:Router) {}

  ngOnInit(): void {}
  formSubmit() {
    console.log('l');
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required !!', '', {
        duration: 3000,
      });

      return;
    }
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !!', '', {
        duration: 3000,
      });

      return;
    }
    //request to server to get generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        //success
        console.log(data);
        console.log('success');

        this.login.loginuser(data.token);
        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);
          if (this.login.getUserRole() == 'Admin') {
           // window.location.href='/admin';
           this.login.loginStatusSubject.next(true);
           this.router.navigate(['admin'])

          } else if (this.login.getUserRole() == 'Normal') {
            this.login.loginStatusSubject.next(true);
            this.router.navigate(['user-dashboard'])
          }else{
            this.login.logout();
          }
          
        });

        // Swal.fire('success done !!','user id is '+ data.id, 'success');
      },
      (error) => {
        console.log(error);
         this.snack.open('Invalid details !! Try again ', '',{
duration:3000,
         })
      }
    );
  }
}

function user(user: any) {
  throw new Error('Function not implemented.');
}
//"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrcmlzaG5hMTIiLCJleHAiOjE2NTAwODE4ODQsImlhdCI6MTY1MDA0NTg4NH0.GZC_r3hoDZP3hyagMK7F5-XPJ7ZhtEZYVa5Q4kHciAA"
