import { Component, OnInit } from '@angular/core';
import { AnimalModel } from '../../models/animal.model';

import { AnimalService } from 'src/app/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  public animal!: AnimalModel;
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
   this.getAnimal();
  }

  private getAnimal() {
    const currentAnimal = JSON.parse(localStorage.getItem(this.animalService.KEY_animal) as string);
    this.animal = currentAnimal as AnimalModel;
  }

  public onGoList() {
    this.animalService.onGoBack();
  }

}
