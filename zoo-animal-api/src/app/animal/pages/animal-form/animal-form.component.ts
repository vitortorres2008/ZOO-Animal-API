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
    id: 0
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
    const data = {
      name: this.add.name,
      latin_name: this.add.latin_name,
      animal_type: this.add.animal_type,
      active_time: this.add.active_time,
      length_min: this.add.length_min,
      length_max: this.add.length_max,
      weight_min: this.add.weight_min,
      weight_max: this.add.weight_max,
      lifespan: this.add.lifespan,
      habitat: this.add.habitat,
      diet: this.add.diet,
      geo_range: this.add.geo_range,
    }
    console.log(data)
    this.animalListService.addData(data).subscribe(res => console.log(res));
    this.router.navigate([''])
  }
}
