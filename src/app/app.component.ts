import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { trigger, state, style, animate, transition, query, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [])
  ]
})
export class AppComponent {
  title = 'NetflixClone';

  prepareRoute (outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
