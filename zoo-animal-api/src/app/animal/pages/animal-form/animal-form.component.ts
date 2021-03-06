import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal.service';
import { AnimalModel } from '../../models/animal.model';
import { AnimalListService } from '../animal-list/services/animal-list.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  add: AnimalModel = {
    name: '',
    latin_name: '',
    animal_type: '',
    active_time: '',
    length_min: '',
    length_max: '',
    weight_min: '',
    weight_max: '',
    lifespan: '',
    habitat: '',
    diet: '',
    geo_range: '',
    image_link: '',
  }

  constructor(private animalService: AnimalService,
    private animalListService: AnimalListService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onGoList() {
    this.animalService.onGoBack();
  }

  addAnimal() {
    this.animalListService.addData(this.add);
    this.router.navigate([''])
  }
}
