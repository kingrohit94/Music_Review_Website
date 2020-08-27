import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})



export class LibComponent implements OnInit {

  brews: Object;
  details: object;

  global: any;
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

  //click to see details
songdetfun(value: any) {
console.log('song id',value.srcElement.id)
this._http.getsongbyid(value.srcElement.id).subscribe(data=> {
this.details = data
console.log(this.details);
    });
 
}

//click to see reviews
songreview(value : any) {
  console.log('song id',value.srcElement.id)
  this._http.getsongreview(value.srcElement.id).subscribe(data=> {
  this.revs = data
  console.log(this.revs);
});
}

}
