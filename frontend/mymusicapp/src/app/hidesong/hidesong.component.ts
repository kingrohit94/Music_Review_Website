import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hidesong',
  templateUrl: './hidesong.component.html',
  styleUrls: ['./hidesong.component.scss']
})
export class HidesongComponent implements OnInit {
  brews: Object;
  revs: Object;

  constructor(private _http: HttpService) { }
//get all songs
ngOnInit() {
    this._http.getsongs().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }
 //hidesong func form submit  
  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.hidesong(form.value).subscribe(data=>{
      console.log(data)
    }
    );
  }
}
