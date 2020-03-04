import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerosComponent } from './heros/heros.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { HeroService } from './services/hero/hero.service';
import { HeroFormComponent } from './hero-form/hero-form.component';

const appRoutes: Routes = [
  { path : 'dashboard', component: DashboardComponent },
  { path: 'heros', component: HerosComponent },
  { path: '', component: DashboardComponent, pathMatch:'full'},
  { path: 'hero-detail', component: HerodetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HerosComponent,
    HerodetailComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
