import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalRoutingModule } from './animal-routing.module';

import { AnimalComponent } from './animal.component';
import { AnimalDetailsComponent } from './pages/animal-details/animal-details.component';
import { AnimalListComponent } from './pages/animal-list/animal-list.component';
import { AnimalFormComponent } from './pages/animal-form/animal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalListComponent,
    AnimalDetailsComponent,
    AnimalFormComponent
  ],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    FormsModule
  ],
})
export class AnimalModule { }
