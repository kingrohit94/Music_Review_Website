import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  
 
  res: any;
  

  constructor(private _http: HttpService, private router: Router) { }
  ngOnInit() {
  }

  //user login form submission and isAdmin check
  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.postauth(form.value).subscribe(res =>{
      
      localStorage.setItem('token', res["token"]);
      
      console.log(res);
      
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(res["token"]);
      console.log(decodedToken);
      
      if (decodedToken.isAdmin == true)
    {this.router.navigate(['admin']);}
    });
    alert('Login successful');
    this.router.navigate(['userpage']);
}
}
