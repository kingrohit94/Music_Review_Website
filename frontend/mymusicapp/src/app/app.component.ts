import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SearchService]
})
export class AppComponent {
 
 
  title = 'mymusicapp';
  constructor(
    private router: Router
    
    
) {

}

//logout function
logout() {
  localStorage.clear();
  this.router.navigate(['/home']);
}
}

 
 