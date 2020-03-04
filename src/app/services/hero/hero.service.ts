import { Injectable } from '@angular/core';
import { Hero } from 'src/app/share/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heros : Hero[];
  constructor() { 
    this.heros= [{id: 1, name: 'Hercule'}];
    
  }

  getHero() {
    return this.heros;
  }
}
