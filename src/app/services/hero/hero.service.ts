import { Injectable } from '@angular/core';
import { Hero } from 'src/app/share/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heros : Hero[];
  constructor() { 
    this.heros= [{id: 1, name: 'Hercule'}, {id:2, name: 'Messi'}, {id:3, name:'Bruce-lee'}];
    
  }

  getHero() {
    return this.heros;
  }
  getHeroDetail(id: number){
    const hero = this.heros.find(
      heroObject=> {
        return heroObject.id ===id;
      }
      );
      return hero;
  }
}
