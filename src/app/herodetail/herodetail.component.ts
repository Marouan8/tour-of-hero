import { Component, OnInit } from '@angular/core';
import { Hero } from '../share/hero.model';
import { HeroService } from '../services/hero/hero.service';
import { HerosComponent } from '../heros/heros.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common';


@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
  hero: Hero;
  name: string;
  age : number;
  origin: string;
  city: string;
  
  constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getHero();
    
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.router.navigate(['/heros']);

  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }


}
