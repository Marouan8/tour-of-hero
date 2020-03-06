import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HerodetailComponent } from "./herodetail.component";
import { HeroService } from "../services/hero/hero.service";
import { Router } from "@angular/router";

describe("HerodetailComponent", () => {
  let component: HerodetailComponent;
  let fixture: ComponentFixture<HerodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HerodetailComponent, HeroService],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy("navigate")
          }
        }
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
