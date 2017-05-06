import { Component, AfterViewInit } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Animal } from './animal.model'

declare var jQuery: any

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
    <nav class="cyan darken-4">
      <div class="nav-wrapper">
        <ul class="left">
        <li *ngIf="!showNewAnimalForm" class="right"><a (click)="toggleNewAnimalForm()">Add a New Animal</a></li>
     <li *ngIf="showNewAnimalForm" class="right"><a (click)="toggleNewAnimalForm()">Done Adding</a></li>
        </ul>
        <a href="#!" class="brand-logo center">ZOOT</a>
        <ul class="right hide-on-med-and-down">
          <!-- Dropdown Trigger -->
          <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Filters<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="https://github.com/slaughtr/zoot">Github<i class="fa fa-github-alt right"></i></a></li>
        </ul>
      </div>
    </nav>

    <animal-new *ngIf="showNewAnimalForm" (newAnimalSender)="addNewAnimal($event)"></animal-new>
    <div class="row">
      <div class="col s12">
        <animal-list *ngIf="!showNewAnimalForm" [animals]="animals | async"></animal-list>
      </div>
    </div>
  `
})

export class AppComponent {
  animals: FirebaseListObservable<any[]>
   constructor(af: AngularFire) {
     this.animals = af.database.list('/animals')
   }

   showNewAnimalForm: boolean = false
   toggleNewAnimalForm() {
     this.showNewAnimalForm = !(this.showNewAnimalForm)
   }

   addNewAnimal(newAnimal: Animal) {
     this.animals.push(newAnimal)
   }

   //serves as a jQuery document.ready
   ngAfterViewInit() {
     jQuery(".dropdown-button").dropdown({
       belowOrigin: true,
     })
   }
}
