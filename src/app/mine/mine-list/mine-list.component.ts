import { Component }  from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
    selector:'mine-list',
    templateUrl:'./mine-list.component.html',
    styleUrls:[]
})

 export class MineListComponent {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ){}
    value: number =1;
    navigate():void {
        console.log(this.route);
        
        this.router.navigate([this.value],{relativeTo:this.route});
    }

}