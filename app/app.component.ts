import { Component, AfterViewInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Animal } from './animal.model';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  template: `
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">All</a></li>
      <li class="divider"></li>
      <li><a href="#!">Young</a></li>
      <li><a href="#!">Old</a></li>
      <li class="divider"></li>
      <li><a href="#!">By Species (make sub-dropdown listing each species)</a></li>
      <li><a href="#!">By Date Admitted</a></li>
      <li><a href="#!">By Diet (sub-dropdown of omni/veg/carn, also omni&carn)</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper">
        <ul class="left">
          <li><a href="#">Add New Animal</a></li>
        </ul>
        <a href="#!" class="brand-logo center">ZOOT</a>
        <ul class="right hide-on-med-and-down">
          <!-- Dropdown Trigger -->
          <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Filters<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="https://github.com/slaughtr/zoot">Github<i class="fa fa-github-alt right"></i></a></li>
        </ul>
      </div>
    </nav>
  `
})

export class AppComponent {
  animals: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
     this.animals = af.database.list('/animals');
   }

   //serves as a jQuery document.ready
   ngAfterViewInit() {
     jQuery(".dropdown-button").dropdown({
       belowOrigin: true,
     });
   }
}
