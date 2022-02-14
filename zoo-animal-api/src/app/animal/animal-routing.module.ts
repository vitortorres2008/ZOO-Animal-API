import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalComponent } from './animal.component';
import { AnimalListComponent } from './pages/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './pages/animal-details/animal-details.component';
import { AnimalFormComponent } from './pages/animal-form/animal-form.component';

const routes: Routes = [
  {
    path: '', component: AnimalComponent, children: [
      { path: '', component: AnimalListComponent },
      { path: 'animal-details/:id', component: AnimalDetailsComponent },
      { path: 'add-animal', component: AnimalFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
