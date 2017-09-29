import { NgModule } from '@angular/core';
import { MessageRoutingModule }  from  './message-routing.module';
import { FormsModule } from '@angular/forms';

import { MessageComponent }  from   './message.component';
import { MessageMenuComponent } from './message-menu/message-menu.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageListComponent } from './message-list/message-list.component';


@NgModule({
    imports:[MessageRoutingModule,FormsModule],
    declarations:[
        MessageComponent,
        MessageMenuComponent,
        MessageDetailComponent,
        MessageListComponent
    ],
    providers:[]
})

export class MessageModule {

    
}