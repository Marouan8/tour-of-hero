import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HerosComponent } from './heros.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe("HerosComponent", () => {
  let component: HerosComponent;
  let fixture: ComponentFixture<HerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("getHeroes", () => {
    it("should get heroes list", () => {
      spyOn(component, 'getHeroes').and.callThrough();
      component.getHeroes();
      expect(component.getHeroes).toHaveBeenCalled();
    });
  });
});
