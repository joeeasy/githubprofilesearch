import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';


 import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';
import { GithubSerivce } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [GithubSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
