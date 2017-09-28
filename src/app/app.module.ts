import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeModule }  from  './home/home.module';
import { MessageModule } from  './message/message.module';
import { MineModule }  from   './mine/mine.module';


import {  TestComponent } from  './test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    MessageModule,
    MineModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
