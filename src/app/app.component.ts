import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { Hero } from './share/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tour-of-heros';
  heros:Hero[];
  constructor(private heroService: HeroService) {}
  ngOnInit() {}

}
