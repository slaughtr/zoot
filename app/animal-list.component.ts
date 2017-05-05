import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="col s3" *ngFor="let animal of animals">
      <div class="card">
        <div class="card-image">
          <img [src]="animal.imageURL">
          <span class="card-title">{{animal.name}}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
        </div>
        <div class="card-content">
          <ul>
          <li>Species: {{animal.species}}</li>
          <li>Age: {{animal.age}}</li>
          <li>Sex: {{animal.sex}}</li>
          <li>Diet: {{animal.diet}}</li>
          <li>Description: {{animal.description}}</li>
          <li>Location: {{animal.location}}</li>
          <li>Likes: {{animal.likes}}</li>
          <li>Dislikes: {{animal.dislikes}}</li>
          <li>Number of caretakers: {{animal.caretakers}}</li>
          <li>Admitted on: {{animal.admitted}}</li>
          </ul>
        </div>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
}
