import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {  HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { LoadersCssModule } from 'angular2-loaders-css'



 import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';
import { GithubSerivce } from './services/github.service';
import { LoadersComponent } from './components/loaders/loaders.component';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent, LoadersComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    LoadersCssModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [GithubSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
