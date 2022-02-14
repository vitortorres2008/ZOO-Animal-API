import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimalListService } from './services/animal-list.service';
import { AnimalService } from './../../../animal.service';
import { AnimalModel } from '../../models/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalList!: AnimalModel[];
  userAnimalList!: AnimalModel[];
  
  constructor(private animalListService: AnimalListService, private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
    this.userAnimalList = this.animalListService.animalList;
      this.animalListService.getData().subscribe(animal => {
        this.animalList = [...this.userAnimalList, ...animal]
    })
  }

  public sendToRoute(animal: AnimalModel) {
    const param = animal.name.trim();
    this.router.navigate([`animal-details/${param}`]);
    this.sendAnimal(animal);
  }

  private sendAnimal(animal: AnimalModel) {
    this.animalService.setAnimal(this.animalService.KEY_animal, animal);
  }

  public trackByFn = (index: number, animal: AnimalModel) => animal.id;

  public addAnimal() {
    this.router.navigate(['add-animal'])
  }

}
