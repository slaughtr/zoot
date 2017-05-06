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
        return animal.age < 3
      }))
    } else if (filter === 'old') {
      return input.map(animals => animals.filter(animal => {
        return animal.age > 3
      }))
    } else if (filter === 'omnivore') {
      return input.map(animals => animals.filter(animal => {
        return animal.diet === 'Omnivore'
      }))
    } else if (filter === 'carnivore') {
      return input.map(animals => animals.filter(animal => {
        return animal.diet === 'Carnivore'
      }))
    } else if (filter === 'herbivore') {
      return input.map(animals => animals.filter(animal => {
        return animal.diet === 'Herbivore'
      }))
    } else if (filter === 'insectivore') {
      return input.map(animals => animals.filter(animal => {
        return animal.diet === 'Insectivore'
      }))
    } else if (filter === 'meateaters') {
      return input.map(animals => animals.filter(animal => {
        return ((animal.diet === 'Omnivore') && (animal.diet === 'Carnivore'))
      }))
    } else if (filter === 'planteaters') {
      return input.map(animals => animals.filter(animal => {
        return ((animal.diet === 'Omnivore') && (animal.diet === 'Herbivore'))
      }))
    } else if (filter === 'male') {
      return input.map(animals => animals.filter(animal => {
        return animal.sex === 'Male'
      }))
    } else if (filter === 'female') {
      return input.map(animals => animals.filter(animal => {
        return animal.sex === 'Female'
      }))
    } else if (filter === 'hermaphroditic') {
      return input.map(animals => animals.filter(animal => {
        return animal.sex === 'Hermaphroditic'
      }))
    } else if (filter === 'unknownsex') {
      return input.map(animals => animals.filter(animal => {
        return animal.sex === 'Unknown'
      }))
    } else if (filter === 'newlyadmitted') {
      return input.map(animals => animals.filter(animal => {
        var cutOff = moment().subtract(3, 'months').format('YYYY-MM-DD')
        return moment(animal.admitted, 'YYYY-MM-DD').isAfter(cutOff)
      }))
    }
  }
}
