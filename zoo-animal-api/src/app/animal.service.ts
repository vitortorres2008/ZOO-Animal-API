import { Injectable } from '@angular/core';

import { AnimalModel } from './animal/models/animal.model';
import { environment } from '../environments/environment';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public KEY_animal = environment.KEY_animal;
  public KEY_new_animal = environment.KEY_new_animal;

  constructor(private location: Location) { }

  public setAnimal(key: string, animal: AnimalModel | AnimalModel[]) {
    localStorage.setItem(key, JSON.stringify(animal));
  }

  onGoBack() {
    this.location.back();
  }
}
