import { Injectable } from '@angular/core';
import { Hero } from 'src/app/share/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages.service';
import { HEROES } from 'src/app/share/HEROES.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heros: Hero[];
  heroesUrl = 'api/heroes';
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  
  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fetched with id: ${id}`);

    return of(HEROES.find(hero => hero.id === id));
  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`HeroService: Fetched Heroes`);
    return of(HEROES);

  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}
