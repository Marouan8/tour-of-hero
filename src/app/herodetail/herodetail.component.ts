import { Component, OnInit } from '@angular/core';
import { Hero } from '../share/hero.model';
import { HeroService } from '../services/hero/hero.service';
import { HerosComponent } from '../heros/heros.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  hero: Hero[];
  name: string;
  
  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
   this.name  = this.heroService.getHeroDetail(+id).name;
  }


}
