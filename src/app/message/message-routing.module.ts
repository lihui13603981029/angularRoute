import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { MessageComponent }  from './message.component';
import { MessageMenuComponent } from './message-menu/message-menu.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageListComponent } from './message-list/message-list.component';


//路由守卫
import { AuthGuard } from   './../auth-guard.service';


const routes: Routes = [
    {
        path:'message',
        component: MessageComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'messgeMenu',
                component: MessageMenuComponent,
                children:[
                    {
                        path:'list',
                        component: MessageListComponent
                    },{
                        path:'',
                        component: MessageDetailComponent
                    }
                ]
            }
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class MessageRoutingModule {


}