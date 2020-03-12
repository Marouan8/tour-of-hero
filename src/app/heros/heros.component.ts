import { Component, OnInit } from '@angular/core';
import { Hero } from '../share/hero.model';
import { HeroService } from '../services/hero/hero.service';



@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes:Hero[];
  

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

  }
  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string, age: number, city: string, origin: string): void {
    name = name.trim();
       if (!name ) { return ; }
    this.heroService.addHero({ name, age, city, origin } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  

}
