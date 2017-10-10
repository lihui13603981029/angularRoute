import { Component }  from '@angular/core';


@Component({
    template:  `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./manageMeg" routerLinkActive="active">Manage Message</a>
      <a routerLink="./manageHome" routerLinkActive="active">Manage Home</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AdminComponent {


}