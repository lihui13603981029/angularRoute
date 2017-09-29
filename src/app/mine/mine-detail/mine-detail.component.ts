import { Component, OnInit, Input }  from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
    selector:'mine-detail',
    templateUrl:'./mine-detail.component.html',     
    styleUrls:[]
})

export class MineDetailComponent implements OnInit{

    constructor(
        private route: ActivatedRoute
    ){}
    name: string ='mine-detail';
    ngOnInit():void{
        
           
    }
   
   

}
