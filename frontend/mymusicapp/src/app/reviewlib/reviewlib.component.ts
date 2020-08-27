import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-reviewlib',
  templateUrl: './reviewlib.component.html',
  styleUrls: ['./reviewlib.component.scss']
})
export class ReviewlibComponent implements OnInit {

  brew: Object;

  constructor(private _http: HttpService) { }
//get all reviews
  ngOnInit() {
    this._http.getreviews().subscribe(data => {
      this.brew = data
      console.log(this.brew);
    }
  );
  }

}