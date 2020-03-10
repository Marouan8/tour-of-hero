import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HerodetailComponent } from "./herodetail.component";
import { HeroService } from "../services/hero/hero.service";
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe("HerodetailComponent", () => {
  let component: HerodetailComponent;
  let fixture: ComponentFixture<HerodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HerodetailComponent],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        HeroService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
