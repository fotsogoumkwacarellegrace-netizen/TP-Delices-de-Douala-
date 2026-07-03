import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedCount } from './rated-count';

describe('RatedCount', () => {
  let component: RatedCount;
  let fixture: ComponentFixture<RatedCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatedCount],
    }).compileComponents();

    fixture = TestBed.createComponent(RatedCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
