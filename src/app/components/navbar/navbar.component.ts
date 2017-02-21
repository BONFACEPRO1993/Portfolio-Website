import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavComponent {
  about = 'ABOUT ME';
  projects = 'MY WORKS';
  contacts = 'CONNECT';

}
