import { Pipe, PipeTransform } from '@angular/core'
import { Animal } from './animal.model'

@Pipe({
  name: 'listfilter',
  pure: true
})

export class AnimalListPipe implements PipeTransform {

  transform(input: any, filter: string) {
    if (filter === 'all') {
      return input
    } else if (filter === 'young') {
      return input.map(animals => animals.filter(animal => {
        return animal.age < 3;
      }))
    } else if (filter === 'old') {

    } else if (filter === 'omnivore') {

    } else if (filter === 'carnivore') {

    } else if (filter === 'herbivore') {

    } else if (filter === 'insectivore') {

    } else if (filter === 'meateaters') {

    } else if (filter === 'planteaters') {

    } else if (filter === 'male') {

    } else if (filter === 'female') {

    } else if (filter === 'hermaphroditic') {

    } else if (filter === 'unknownsex') {

    } else if (filter === 'newlyadmitted') {

    }
  }
}
