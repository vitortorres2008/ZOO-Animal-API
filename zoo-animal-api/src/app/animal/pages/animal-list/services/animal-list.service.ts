import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

import { environment } from './../../../../../environments/environment';
import { AnimalModel } from './../../../models/animal.model';

@Injectable({
  providedIn: 'root'
})

export class AnimalListService {
  private envAndress = environment.envAdress;
  constructor(private http: HttpClient) { }

  public getData(): Observable<AnimalModel[]> {
    return this.http.get<AnimalModel[]>(this.envAndress)
      .pipe(
        delay(1000)
      );
  }

  public addData(data: any): Observable<any>{
    return this.http.post(this.envAndress, data);
  }

}
