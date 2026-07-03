import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRating } from './current-rating';

describe('CurrentRating', () => {
  let component: CurrentRating;
  let fixture: ComponentFixture<CurrentRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentRating],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentRating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
