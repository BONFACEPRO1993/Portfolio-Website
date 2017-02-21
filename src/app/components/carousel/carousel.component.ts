import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'main-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css'],


})
export class CarouselComponent {
  about = 'ABOUT ME';
  projects = 'MY WORKS';
  contacts = 'CONNECT';
}
