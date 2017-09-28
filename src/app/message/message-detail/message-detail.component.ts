import { Component } from '@angular/core';
import { slideInDownAnimation }  from '../.././animations';
import { HostBinding } from  '@angular/core';

@Component({
    selector:'message-detail',
    templateUrl:'./message-detail.component.html',
    styleUrls:['./message-detail.component.css'],
    animations:[slideInDownAnimation]
    
})

export class MessageDetailComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';

}