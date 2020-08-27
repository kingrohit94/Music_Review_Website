import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addsongs',
  templateUrl: './addsongs.component.html',
  styleUrls: ['./addsongs.component.scss']
})
export class AddsongsComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  //add song form submit
  onSubmit(form: NgForm) {
    console.log("onsubmit")
    this._http.postsongs(form.value).subscribe(data=>{
      console.log(data)
    });
    alert('New song added successfully');
  }
}
