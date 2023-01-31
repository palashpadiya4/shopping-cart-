import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user: any;
  constructor(private login: LoginService) { }

  ngOnInit(): void {

     this.user = this.login.getUser();
    // this.login.getCurrentUser().subscribe(
    //   (user:any)=>{
    //     this.user=user;
    //   },
    //   (error)=>{
    //     alert("error");
    //   }
    //   )
    
  }

}
