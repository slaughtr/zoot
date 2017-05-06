import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngIf="showAnimalList">
    <div class="col s4 m4 l4" *ngFor="let animal of animals">
      <div class="card animalListCard">
        <div class="card-image cyan lighten-4">
          <img [src]="animal.imageURL">
          <span class="card-title">{{animal.name}}</span>
          <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal"><i (click)="toggleEditAnimalForm(animal)"  class="material-icons">edit</i></a>
        </div>
        <div class="card-content cyan lighten-4">
          <ul class="collection">
          <li class="collection-item"><strong>Species:</strong> {{animal.species}}</li>
          <li class="collection-item teal lighten-5"><strong>Age:</strong> {{animal.age}}</li>
          <li class="collection-item"><strong>Sex:</strong> {{animal.sex}}</li>
          <li class="collection-item teal lighten-5"><strong>Diet:</strong> {{animal.diet}}</li>
          <li class="collection-item"><strong>Description:</strong> {{animal.description}}</li>
          <li class="collection-item teal lighten-5"><strong>Location:</strong> {{animal.location}}</li>
          <li class="collection-item"><strong>Likes:</strong> {{animal.likes}}</li>
          <li class="collection-item teal lighten-5"><strong>Dislikes:</strong> {{animal.dislikes}}</li>
          <li class="collection-item"><strong>Number of caretakers:</strong> {{animal.caretakers}}</li>
          <li class="collection-item teal lighten-5"><strong>Admitted on:</strong> {{animal.admitted}}</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    <animal-edit *ngIf="animalToEdit" [animal]="animalToEdit" (editAnimalSender)="editAnimal($event)" (hideAnimalListForEdit)="hideAnimalListForEdit()"></animal-edit>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal
  @Output() editAnimalSender = new EventEmitter()

  showAnimalList: boolean = true
  animalToEdit: Animal

  hideAnimalListForEdit() {
    console.log("hideANimalListForEdit")
    this.showAnimalList = !(this.showAnimalList)
  }

  toggleEditAnimalForm(animal: Animal) {
    console.log("toggleEditAnimalForm")
    this.animalToEdit = animal
    this.showAnimalList = false
  }

  editAnimal(animalToEdit: any) {
    this.animalToEdit = null
    this.editAnimalSender.emit(animalToEdit)
  }
}
