import { Component, AfterViewInit } from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import { Animal } from './animal.model'

declare var jQuery: any

@Component({
  selector: 'app-root',
  template: `
    <ul id="dropdown1" class="dropdown-content">
      <li (click)="appliedFilter = 'all';"><a>All</a></li>
      <li class="divider"></li>
      <li (click)="appliedFilter = 'young';"><a>Young (< 3 years)</a></li>
      <li (click)="appliedFilter = 'old';"><a>Old (> 3 years)</a></li>
      <li class="divider"></li>
      <li (click)="appliedFilter = '';"><a>By Species (make sub-dropdown listing each species)</a></li>
      <li (click)="appliedFilter = 'newlyadmitted';"><a>Admitted in Last 3 Months</a></li>
      <li (click)="appliedFilter = '';"><a>By Diet (sub-dropdown of omni/veg/carn, also omni & carn)</a></li>
    </ul>
    <nav class="cyan darken-4">
      <div class="nav-wrapper">
        <ul class="left">
          <li *ngIf="!showNewAnimalForm" class="right newButton"><a (click)="toggleNewAnimalForm()">Add a New Animal</a></li>
          <li *ngIf="showNewAnimalForm" class="right newButton"><a (click)="toggleNewAnimalForm()">Done Adding</a></li>
        </ul>
        <a href="#!" class="brand-logo center">ZOOT</a>
        <ul class="right hide-on-med-and-down">
          <!-- Dropdown Trigger -->
          <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Filter: {{appliedFilter}}<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="https://github.com/slaughtr/zoot">Github<i class="fa fa-github-alt right"></i></a></li>
        </ul>
      </div>
    </nav>
    <div class="row">
      <div class="col s12">
        <animal-new *ngIf="showNewAnimalForm" (newAnimalSender)="addNewAnimal($event)"></animal-new>
      </div>
    </div>

    <div class="row">
      <div class="col s12">
        <animal-list *ngIf="showAnimalList" [animals]="animals | listfilter:appliedFilter | async" (editAnimalSender)="editAnimal($event)"></animal-list>
      </div>
    </div>
  `
})

export class AppComponent {
  animals: FirebaseListObservable<any[]>
   constructor(af: AngularFire) {
     this.animals = af.database.list('/animals')
   }

   appliedFilter: string = 'all'
   showNewAnimalForm: boolean = false
   showAnimalList: boolean = true

   toggleNewAnimalForm() {
     this.showNewAnimalForm = !(this.showNewAnimalForm)
     this.showAnimalList = !(this.showAnimalList)
   }

   addNewAnimal(newAnimal: Animal) {
     this.animals.push(newAnimal)
   }

   editAnimal(animalToEdit: any) {
   delete animalToEdit.animal.$exists;
   delete animalToEdit.animal.$key;
   this.animals.update(animalToEdit.key, animalToEdit.animal)
 }

   //serves as a jQuery document.ready
   ngAfterViewInit() {
     jQuery(".dropdown-button").dropdown({
       belowOrigin: true,
     })
   }
}
