import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule }  from  '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeModule }  from  './home/home.module';
import { MessageModule } from  './message/message.module';
import { MineModule }  from   './mine/mine.module';


import  { ComposeMessageComponent }  from './compose-message.component';


import {  TestComponent } from  './test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HomeModule,
    MessageModule,
    MineModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
