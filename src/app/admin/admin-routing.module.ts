import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageMessageComponent }    from './manage-message.component';
import { ManageHomeComponent }    from './manage-home.component';

const  routes:Routes = [
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:'',
                children:[
                    {path:'manageMeg',component: ManageMessageComponent},
                    {path:'manageHome', component: ManageHomeComponent},
                    {path:'', component: AdminDashboardComponent}
            ]}
    ]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule {

}