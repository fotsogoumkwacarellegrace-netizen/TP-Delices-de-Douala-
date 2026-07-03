import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingChanged } from './rating-changed';

describe('RatingChanged', () => {
  let component: RatingChanged;
  let fixture: ComponentFixture<RatingChanged>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingChanged],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingChanged);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
