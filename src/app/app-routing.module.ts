import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';


import  {  TestComponent } from  './test.component';
import  { ComposeMessageComponent }  from './compose-message.component';




const routes: Routes =[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'**', component: TestComponent},
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      }
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}