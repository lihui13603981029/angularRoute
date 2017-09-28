import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './home.component';

import { HomeMenuComponent} from './home-menu/home-menu.component';
const  routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'homeMenu',component: HomeMenuComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class HomeRoutingModule {


}