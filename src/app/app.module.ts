import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule }  from  '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from  './login/login-routing.module';

import { AppComponent } from './app.component';
import { HomeModule }  from  './home/home.module';
import { MessageModule } from  './message/message.module';
import { MineModule }  from   './mine/mine.module';
import { AdminModule }  from  './admin/admin.module';

import { LoginComponent } from  './login/login.component';

import  { ComposeMessageComponent }  from './compose-message.component';


import {  TestComponent } from  './test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HomeModule,
    MessageModule,
    MineModule,
    AdminModule,
    LoginRoutingModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
