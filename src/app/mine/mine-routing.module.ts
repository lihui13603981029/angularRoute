import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MineComponent } from  './mine.component';
import { MineMenuComponent } from './mine-menu/mine-menu.component';
import { MineDetailComponent } from './mine-detail/mine-detail.component';
import { MineListComponent } from  './mine-list/mine-list.component';

const mineRoutes: Routes = [
    {
        path:'mine',
        component: MineComponent,
        children: [
            
            {path:'mineMenu',component: MineMenuComponent},
            {path:'mineList', component: MineListComponent,
            children:[
               
                {path:':id', component: MineDetailComponent}
            ]}
            
            
        ]},
        
]

@NgModule({
    imports:[RouterModule.forChild(mineRoutes)],
    exports:[RouterModule]

})

export class MineRoutingModule {

}