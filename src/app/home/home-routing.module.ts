import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeMenuComponent} from './home-menu/home-menu.component';
const  routes: Routes = [
    {path:'home', component: HomeMenuComponent}
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