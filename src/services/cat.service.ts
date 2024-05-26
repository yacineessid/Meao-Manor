import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATS } from './../data/catsData';
import { Cat } from 'src/models/catModel';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private cats: Cat[] = CATS; // Correctly typed array of Cat objects

  getCats(): Observable<Cat[]> {
    return of(this.cats);
  }

  getCatById(id: number): Observable<Cat> {
    return of(this.cats.find(cat => cat.id === id)!);
  }

  filterCats(criteria: any): Observable<Cat[]> {
    return of(this.cats.filter(cat => cat.gender === criteria));
  }


  getStatistics(): Observable<any> {
    const averageAge = this.cats.reduce((sum, cat) => sum + cat.age, 0) / this.cats.length;
    return of({ averageAge });
  }
}
