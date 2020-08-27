import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  authenticationService: any;
  model: any;
  alertService: any;
  errorMessage = '';
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  //add new user form submit
  onSubmit(form: NgForm) {
    this.errorMessage = '';
    console.log("onsubmit")
    this._http.postuser(form.value).subscribe(data=>{
      console.log(data)
    },
    //checking if user already registered
    (error) => {
      this.errorMessage = error.message; 
      alert("User already registered")
  }
    );
    //alert('User registration successful');
    this.router.navigate(['/home']);
  }
 
}



