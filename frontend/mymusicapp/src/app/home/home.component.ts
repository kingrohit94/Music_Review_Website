import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  brews: Object;
  details: Object;
  revs: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getsongs().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }

songdetfun(value: any) {
console.log('song id',value.srcElement.id)
this._http.getsongbyid(value.srcElement.id).subscribe(data=> {
this.details = data
console.log(this.details);
    });
 
}
songreview(value : any) {
  console.log('song id',value.srcElement.id)
  this._http.getsongreview(value.srcElement.id).subscribe(data=> {
  this.revs = data
  console.log(this.revs);
});
}
}

