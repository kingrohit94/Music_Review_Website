import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deletesongs',
  templateUrl: './deletesongs.component.html',
  styleUrls: ['./deletesongs.component.scss']
})
export class DeletesongsComponent implements OnInit {
  plays: Object;
  constructor(private _http: HttpService) { }
//get playlists data
  ngOnInit() {
    this._http.getplay().subscribe(data => {
      this.plays = data
      console.log(this.plays);
    }
  )};
  
//submit playlist update form
  onSubmit(form: NgForm) {
    console.log("onSubmit")
    this._http.modplay(form.value).subscribe(data=>{
      console.log(data)
    }
    );
  }
}
