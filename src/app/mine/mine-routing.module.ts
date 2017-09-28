import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MineComponent } from  './mine.component';

const mineRoutes: Routes = [
    {
        path:'mine',
        component: MineComponent,
        children: [

        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(mineRoutes)],
    exports:[RouterModule]

})

export class MineRoutingModule {

}