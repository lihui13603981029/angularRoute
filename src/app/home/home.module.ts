import { NgModule } from '@angular/core';

import { HomeRoutingModule }  from  './home-routing.module';


import { HomeComponent } from './home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
@NgModule({
    imports:[
        HomeRoutingModule
    ],
    declarations:[
        HomeComponent,
        HomeMenuComponent
    ],
    providers:[]
})

export class HomeModule {

    
}