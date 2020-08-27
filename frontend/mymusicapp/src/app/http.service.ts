//main http functions service component
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  data: string | string[];

  constructor(private http: HttpClient) { }

  //post new user function
  postuser(value: { name: any; email: any; password: any; }) {
    console.log("add user")
    console.log(value.name)
    console.log(value.email)
    console.log(value.password)
    console.log(JSON.stringify({
      name: value.name,
      email: value.email,
      password: value.password
    }))
    return this.http.post('http://localhost:3000/api/users', JSON.stringify({
      name: value.name,
      email: value.email,
      password: value.password
 
    }), {
      headers: {
        'Content-Type': 'application/json',
        
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Validated': 'True'
      }
 
    });
  }

  
//add new songs function
  postsongs(value: { title: any; genre: any; album: any; artist: any; }) {
    console.log("add song")
    console.log(value.title)
    console.log(value.genre)
    console.log(value.album)
    console.log(value.artist)
    console.log(JSON.stringify({
      title: value.title,
      genre: value.genre,
      album: value.album,
      artist: value.artist
    }))
    return this.http.post('http://localhost:3000/api/songs', JSON.stringify({
      title: value.title,
      genre: value.genre,
      album: value.album,
      artist: value.artist
 
    }), {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('token'),
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Validated': 'True'
      }
 
    });
 
  }

  //authenticaiton function
  postauth(value: { email: any; password: any; }) {
    console.log("user login")
    console.log(value.email)
    console.log(value.password)
    console.log(JSON.stringify({
      email: value.email,
      password: value.password
    }))
    return this.http.post('http://localhost:3000/api/auth', JSON.stringify({
      email: value.email,
      password: value.password,
    
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Validated': 'True'
      }
 
    });
  }

//add new reviews function
  postreviews(value: { userId: any; songId: any; reviewtext: any; rating: any; }) {
    console.log("add song")
    console.log(value.userId)
    console.log(value.songId)
    console.log(value.reviewtext)
    console.log(value.rating)
    console.log(JSON.stringify({
      userId: value.userId,
      songId: value.songId,
      reviewtext: value.reviewtext,
      rating: value.rating
    }))
  
    return this.http.post('http://localhost:3000/api/reviews',  JSON.stringify({
      userId: value.userId,
      songId: value.songId,
      reviewtext: value.reviewtext,
      rating: value.rating
  }),{
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('token'),
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Validated': 'True'
      }
 
    });
 
  }  
  
  //get all songs
  getsongs() {
    return this.http.get('http://localhost:3000/api/songs');
    
  }
  
  //get all signed up users
  getadmin(){
    return this.http.get('http://localhost:3000/api/users/all');
    
  }

  //get all playlists
  getplay() {
    return this.http.get('http://localhost:3000/api/playlists');
  }

  //get all reviews
  getreviews() {
    return this.http.get('http://localhost:3000/api/reviews');
  }

  //get songs details by id
  getsongbyid(value:any) {
    console.log('value:',value)
    return this.http.get('http://localhost:3000/api/songs/'+ value)
  }

  //get review details by song id
  getsongreview(value: any)
  {
    console.log('value:',value)
    return this.http.get('http://localhost:3000/api/reviews/'+ value)
  }

  //admin hide song feature
  hidesong(value: { hidden: any; songId: any;}){
    console.log(value.hidden)
    console.log(value.songId)
    console.log(JSON.stringify({
      hidden: value.hidden,
      songId: value.songId
    }))
  
    return this.http.put('http://localhost:3000/api/songs/update', JSON.stringify({
      hidden: value.hidden,
      songId: value.songId
  }),{
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('token'),
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Validated': 'True'
      }
    });
  }

  //update playlists function
  modplay(value: { name: any; songId: any; desc: any; status: any;}){
    console.log(value.name)
    console.log(value.songId)
    console.log(value.desc)
      console.log(value.status)
    console.log(JSON.stringify({
      name: value.name,
      songId: value.songId,
      desc: value.desc,
      status: value.status,
    }))
  
    return this.http.put('http://localhost:3000/api/playlists/update', JSON.stringify({
      name: value.name,
      songId: value.songId,
      desc: value.desc,
      status: value.status,
  }),{
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('token'),
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Validated': 'True'
      }
    });
  }

  //make a user site manager function
  makeadmin(value: { isAdmin: any; userId: any;}){
    console.log(value.isAdmin)
    console.log(value.userId)
    console.log(JSON.stringify({
      isAdmin: value.isAdmin,
      userId: value.userId
    }))
  
    return this.http.put('http://localhost:3000/api/users/update', JSON.stringify({
      isAdmin: value.isAdmin,
      userId: value.userId
  }),{
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token' : localStorage.getItem('token'),
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Validated': 'True'
      }
    });
  } 
}
