import { Component } from '@angular/core';
import { NavComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [NavComponent, HeaderComponent, CarouselComponent]

})
export class AppComponent {
  title = 'Bonbon Inc';
}
