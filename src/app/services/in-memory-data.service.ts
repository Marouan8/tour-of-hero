import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../share/hero.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', age: 25, city: 'Paris', origin: 'France' },
      { id: 12, name: 'Narco', age: 28, city: 'Bogota', origin: 'Colombia' },
      { id: 13, name: 'Bombasto', age: 31, city: 'Moscow', origin: 'Russia' },
      { id: 14, name: 'Celeritas', age: 20, city: 'Milano', origin: 'Italy' },
      { id: 15, name: 'Magneta', age: 45, city: 'Madrid', origin: 'Spain' },
      { id: 16, name: 'RuberrMan', age: 35, city: 'London', origin: 'UK' },
      { id: 17, name: 'Dynama', age: 40, city: 'Oslow', origin: 'Poland' },
      { id: 18, name: 'Dr IQ', age: 21, city: 'Tokyo', origin: 'Japan' },
      { id: 19, name: 'Magma', age: 27, city: 'Helsinki', origin: 'Finland' },
      { id: 20, name: 'Tornado', age: 25, city: 'Porto', origin: 'Portugal' }
    ];
    return { heroes };
  }

  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
  }
}