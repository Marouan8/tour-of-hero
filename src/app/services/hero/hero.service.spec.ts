import { TestBed } from "@angular/core/testing";

import { HeroService } from './hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Hero } from 'src/app/share/hero.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
  ],
  }));

  it("should be created", () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  describe("getHero", () => {
    it("should return the hero with given id", () => {
        
    });

    it('should return undefined when id not found', () => {
      
    });
  });
});
