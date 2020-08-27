//App routing page for all routes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import {  LibComponent } from './lib/lib.component';
import {  LoginComponent } from './login/login.component';
import {  AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddsongsComponent } from './addsongs/addsongs.component';
import { AddreviewsComponent } from './addreviews/addreviews.component';
import { ReviewlibComponent } from './reviewlib/reviewlib.component';
import { UserpageComponent } from './userpage/userpage.component';
import { DeletesongsComponent } from './deletesongs/deletesongs.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MakeadminComponent } from './makeadmin/makeadmin.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },              
  { path: 'lib', component: LibComponent },
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'userlogin', component: UserloginComponent},
  {path: 'addsongs', component: AddsongsComponent},
  {path: 'addreviews', component: AddreviewsComponent},
  {path: 'reviewlib', component: ReviewlibComponent},
  {path: 'userpage', component: UserpageComponent},
  {path: 'deletesongs', component: DeletesongsComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'makeadmin', component: MakeadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
