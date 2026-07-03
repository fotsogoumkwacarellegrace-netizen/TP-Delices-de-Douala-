import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRated } from './restaurant-rated';

describe('RestaurantRated', () => {
  let component: RestaurantRated;
  let fixture: ComponentFixture<RestaurantRated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantRated],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantRated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
