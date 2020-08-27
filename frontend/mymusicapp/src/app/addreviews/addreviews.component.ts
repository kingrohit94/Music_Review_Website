//add review component
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addreviews',
  templateUrl: './addreviews.component.html',
  styleUrls: ['./addreviews.component.scss']
})
export class AddreviewsComponent implements OnInit {
  brews: Object;

  constructor(private _http: HttpService) { }
//get songs
  ngOnInit() {
    this._http.getsongs().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }
  //submit review
  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.postreviews(form.value).subscribe(data=>{
      console.log(data)
    });
    alert('New review added successfully');
  }
}