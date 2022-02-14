import { Injectable } from '@angular/core';

import { AnimalModel } from './animal/models/animal.model';
import { environment } from '../environments/environment';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public KEY_animal = environment.KEY_animal;

  constructor(private location: Location) { }

  public setAnimal(animal: AnimalModel) {
    localStorage.setItem(this.KEY_animal, JSON.stringify(animal));
  }

  onGoBack() {
    this.location.back();
  }
}
