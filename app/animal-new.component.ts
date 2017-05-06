import { Component, Output, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { Animal } from './animal.model';

declare var jQuery: any;

@Component({
  selector: 'animal-new',
  template: `
  <div class="row newAnimalForm center-align">
    <div class="card">
      <div class="row">
        <span class="card-title">
          <h2 class="center-align">Add a New Animal</h2>
        </span>
      </div>
      <form (ngSubmit)="onSubmit()" #newAnimal="ngForm">
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5 push-s1">
            <input #animalName placeholder="Quasimoto" id="name" type="text">
            <label for="name" class="active">Animal Name</label>
          </div>
          <div class="input-field col s5 push-s2">
            <input #animalSpecies placeholder="Bearded Dragon" id="species" type="text">
            <label for="species" class="active">Animal Species</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <label class="active">Animal age in years: {{animalAge}}</label>
            <p class="range-field">
              <input [(ngModel)]="animalAge" type="range" name="age" min="0" max="150" step="0.5">
            </p>
          </div>
          <div class="input-field col s5">
            <select #animalSex name="sex">
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
            <input #animalLikes placeholder="Long walks on the beach" id="likes" type="text">
            <label for="likes" class="active">Things animal likes</label>
          </div>
          <div class="input-field col s5">
            <input #animalDislikes placeholder="Mean people and flat sodas" id="dislikes" type="text">
            <label for="dislikes" class="active">Things animal dislikes</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <select #animalDiet name="diet">
              <option value="Omnivore">Omnivore</option>
              <option value="Carnivore">Carnivore</option>
              <option value="Herbivore">Herbivore</option>
              <option value="Insectivore">Insectivore</option>
            </select>
            <label for="diet">Animal Diet: </label><br>
          </div>
          <div class="input-field col s5">
            <input #animalDescription placeholder="Bright orange belly, small scar on left front leg" id="description" type="text">
            <label for="description" class="active">Short Animal Description</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <input #animalLocation placeholder="Lizard Lounge" id="location" type="text">
            <label for="location" class="active">Animal Habitat Location</label>
          </div>
          <div class="input-field col s5">
            <label class="active">Number of Caretakers Animal Needs: {{animalCaretakers}}</label>
            <br>
            <p class="range-field">
              <input [(ngModel)]="animalCaretakers" type="range" name="caretakers" min="0" max="20" step="1">
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field col s5">
            <input #animalImageURL placeholder="http://zoo.com/quasimoto.jpg" id="imageURL" type="text">
            <label for="imageURL" class="active">Link to Picture of Animal</label>
          </div>
          <div class="input-field col s5">
            <input #animalAdmitted id="admitted" type="date">
            <label for="admitted" class="active">Date Animal Admitted</label>
          </div>
        </div>
      </div>
      <div class="row">
        <button (click)="addNewAnimal(animalSpecies.value, animalName.value,  animalSex.value, animalDiet.value, animalLocation.value, animalLikes.value, animalDislikes.value, animalImageURL.value, animalDescription.value, animalAdmitted.value); animalSpecies.value=''; animalName.value=''; animalLikes.value=''; animalDislikes.value=''; animalDescription.value=''; animalLocation.value=''; animalImageURL.value;" class="waves-effect waves-light btn col s12" type="submit">Add Animal</button>
      </div>
      </form>
    </div>
  </div>
  `
})

export class AnimalNewComponent {
  @Output() newAnimalSender = new EventEmitter();

  animalAge: number = 1;
  animalCaretakers: number = 1;

  addNewAnimal(animalSpecies: string, animalName: string, animalSex: string, animalDiet: string, animalLocation: string, animalLikes: string, animalDislikes: string, animalImageURL: string, animalDescription: string, animalAdmitted: string) {
   var newAnimal: Animal = new Animal(animalSpecies, animalName, this.animalAge, animalSex, animalDiet, animalLocation, this.animalCaretakers, animalLikes, animalDislikes, animalImageURL, animalDescription, animalAdmitted);
   this.newAnimalSender.emit(newAnimal);
 }

  ngAfterViewInit() {
    jQuery('select').material_select();
  }

  onSubmit() {
    event.preventDefault()
    window.scrollTo(0,0)
  }
}
