import { NgModule } from '@angular/core';
import { MineRoutingModule }  from  './mine-routing.module';
import { FormsModule } from '@angular/forms';

import { MineComponent }  from   './mine.component';
import { MineMenuComponent } from './mine-menu/mine-menu.component';
import { MineDetailComponent } from './mine-detail/mine-detail.component';
import { MineListComponent } from  './mine-list/mine-list.component';

@NgModule({
    imports:[MineRoutingModule,FormsModule],
    declarations:[
        MineComponent,
        MineDetailComponent,
        MineMenuComponent,
        MineListComponent
    ],
    providers:[]
})

export class MineModule {

    
}