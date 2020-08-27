import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  plays: any;

  constructor(private _http: HttpService) { }

  //get all playlists 
  ngOnInit() {
    this._http.getplay().subscribe(data => {
      this.plays = data
      console.log(this.plays);
    }
  )};
  }
