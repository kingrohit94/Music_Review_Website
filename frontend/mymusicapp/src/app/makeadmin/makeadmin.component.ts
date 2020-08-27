import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-makeadmin',
  templateUrl: './makeadmin.component.html',
  styleUrls: ['./makeadmin.component.scss']
})
export class MakeadminComponent implements OnInit {
  ads: any;

  constructor(private _http: HttpService) { }

  //get all signed up users
  ngOnInit() {
    this._http.getadmin().subscribe(data => {
      this.ads = data
      console.log(this.ads);
    }
  );
  }

  //make admin form submit
  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.makeadmin(form.value).subscribe(data=>{
      console.log(data)
    }
    );
  } 
}
