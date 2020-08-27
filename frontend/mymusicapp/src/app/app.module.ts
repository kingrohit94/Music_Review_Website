import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SearchService } from './search.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibComponent } from './lib/lib.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';

import { AddsongsComponent } from './addsongs/addsongs.component';
import { AddreviewsComponent } from './addreviews/addreviews.component';

import { DeletesongsComponent } from './deletesongs/deletesongs.component';
import { ReviewlibComponent } from './reviewlib/reviewlib.component';
import { FilterPipe } from './filter.pipe';
import { UserpageComponent } from './userpage/userpage.component';
import { HidesongComponent } from './hidesong/hidesong.component';

import { MakeadminComponent } from './makeadmin/makeadmin.component';
import { PlaylistComponent } from './playlist/playlist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibComponent,
    AdminComponent,
    LoginComponent,
    UserloginComponent,
    AddsongsComponent,
    AddreviewsComponent,
    DeletesongsComponent,
    ReviewlibComponent,
    FilterPipe,
    UserpageComponent,
    HidesongComponent,
    MakeadminComponent,
    PlaylistComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lib',
        component: LibComponent
      },
      {
        path: 'userlogin',
        component: UserloginComponent
      },
      {
        path: 'hidesong',
        component: HidesongComponent
      }
    ])
  ],

  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
