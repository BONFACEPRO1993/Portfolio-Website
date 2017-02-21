import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  home = 'HOME';
  about = 'ABOUT';
  skills='SKILLS';
  projects = 'MY PROJECTS';
  contacts = 'CONTACTS';

}
