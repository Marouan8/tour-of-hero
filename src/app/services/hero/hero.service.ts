import { Injectable } from '@angular/core';
import { Hero } from 'src/app/share/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages.service';
import { HEROES } from 'src/app/share/HEROES.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heros: Hero[];
  constructor(private messageService: MessageService) {
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fetched with id: ${id}`);

    return of(HEROES.find(hero => hero.id === id));
  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`HeroService: Fetched Heroes`);
    return of(HEROES);

  }


}
