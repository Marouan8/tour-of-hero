import { Component, OnInit } from '@angular/core';
import { HeroService} from '../services/hero/hero.service';
import {Hero} from '../share/hero.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heros: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

  }
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heros => this.heros=heros.slice(1,5));
  }
}
