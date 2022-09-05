import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMatchesSectionComponent } from './next-matches-section.component';

describe('NextMatchesSectionComponent', () => {
  let component: NextMatchesSectionComponent;
  let fixture: ComponentFixture<NextMatchesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMatchesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMatchesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
