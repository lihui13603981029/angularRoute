import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeModule }  from  './home/home.module';
// import { MessageModule } from  './message/message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
    // MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
