import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerosComponent } from './heros/heros.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { HeroService } from './services/hero/hero.service';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {MessagesComponent} from './messages/messages.component';
import { MessageService} from './services/messages.service';

const appRoutes: Routes = [
  { path : 'dashboard', component: DashboardComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'detail/:id', component: HerodetailComponent },
  { path: '', redirectTo:'/dashboard', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HerosComponent,
    HerodetailComponent,
    HeroFormComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
