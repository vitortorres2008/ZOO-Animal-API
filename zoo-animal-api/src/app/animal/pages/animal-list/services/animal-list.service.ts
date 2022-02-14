import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

import { environment } from './../../../../../environments/environment';
import { AnimalModel } from './../../../models/animal.model';
import { AnimalService } from '../../../../animal.service';

@Injectable({
  providedIn: 'root'
})

export class AnimalListService {
  private envAndress = environment.envAdress;
  private key = this.animalService.KEY_new_animal;
  public animalList = JSON.parse(localStorage.getItem(this.key) as string) || <AnimalModel[]>[];

  constructor(private http: HttpClient, private animalService : AnimalService) { }

  public getData(): Observable<AnimalModel[]> {
    return this.http.get<AnimalModel[]>(this.envAndress)
      .pipe(
        delay(1000)
      );
  }

  public addData(animal: AnimalModel) {
    this.animalList.push(animal);
    this.animalService.setAnimal(this.key, this.animalList);
  }

}
