import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Animal } from './animal.model';

declare var jQuery: any;

@Component({
  selector: 'animal-new',
  template: `

  `
})

export class AnimalNewComponent {
  @Output newAnimalSender = new EventEmitter();

  onSubmit() {
    event.preventDefault()
  }

  // addAnimal
}
