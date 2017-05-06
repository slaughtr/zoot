import { Component, Output, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { Animal } from './animal.model';

declare var jQuery: any;

@Component({
  selector: 'animal-edit',
  template: `
  <div class="row newAnimalForm center-align">
    <div class="card">
      <div class="row">
        <span class="card-title">
          <h2 class="center-align">Edit {{animal.name}}</h2>
        </span>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5 push-s1">
            <input [(ngModel)]="animal.name" id="name" type="text">
            <label for="name" class="active">Animal Name</label>
          </div>
          <div class="input-field col s5 push-s2">
            <input [(ngModel)]="animal.species" id="species" type="text">
            <label for="species" class="active">Animal Species</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <label class="active">Animal age in years: {{animal.age}}</label>
            <p class="range-field">
              <input [(ngModel)]="animal.age" type="range" name="age" min="0" max="150" step="0.5">
            </p>
          </div>
          <div class="input-field col s5">
            <select [(ngModel)]="animal.sex" name="sex" id="sex">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Hermaphroditic">Hermaphroditic</option>
              <option value="Unknown">Unknown</option>
            </select>
            <label for="sex">Animal Sex: </label><br>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <input [(ngModel)]="animal.likes" id="likes" type="text">
            <label for="likes" class="active">Things animal likes</label>
          </div>
          <div class="input-field col s5">
            <input [(ngModel)]="animal.dislikes" id="dislikes" type="text">
            <label for="dislikes" class="active">Things animal dislikes</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <select [(ngModel)]="animal.diet" name="diet" id="diet">
              <option value="Omnivore">Omnivore</option>
              <option value="Carnivore">Carnivore</option>
              <option value="Herbivore">Herbivore</option>
              <option value="Insectivore">Insectivore</option>
            </select>
            <label for="diet">Animal Diet: </label><br>
          </div>
          <div class="input-field col s5">
            <input [(ngModel)]="animal.description" id="description" type="text">
            <label for="description" class="active">Short Animal Description</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <input [(ngModel)]="animal.location" id="location" type="text">
            <label for="location" class="active">Animal Habitat Location</label>
          </div>
          <div class="input-field col s5">
            <label class="active">Number of Caretakers Animal Needs: {{animal.caretakers}}</label>
            <br>
            <p class="range-field">
              <input [(ngModel)]="animal.caretakers" type="range" name="caretakers" min="0" max="20" step="1">
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <input [(ngModel)]="animal.imageURL" id="imageURL" type="text">
            <label for="imageURL" class="active">Link to Picture of Animal</label>
          </div>
          <div class="input-field col s5">
            <input [(ngModel)]="animal.admitted" id="admitted" type="date">
            <label for="admitted" class="active">Date Animal Admitted</label>
          </div>
        </div>
      </div>
      <div class="row">
        <button (click)="editAnimal(animal.$key, animal)" class="waves-effect waves-light btn col s12" type="button">Edit Animal</button>
      </div>
    </div>
  </div>
  `
})

export class AnimalEditComponent {
  @Input() animal: Animal
  @Output() editAnimalSender = new EventEmitter()
  @Output() hideAnimalListForEdit = new EventEmitter()


  editAnimal(key: string, animal: Animal) {
    this.hideAnimalListForEdit.emit()
    this.editAnimalSender.emit({key: key, animal: animal})
  }

  ngAfterViewInit() {
    jQuery('select').material_select(this.change.bind(this))
    jQuery('#sex').val(this.animal.sex)
    jQuery('#diet').val(this.animal.diet)
  }

  change() {
    this.animal.sex = jQuery('#sex').val()
    this.animal.diet = jQuery('#diet').val()
  }

  onSubmit() {
    event.preventDefault()
    window.scrollTo(0,0)
  }
}
