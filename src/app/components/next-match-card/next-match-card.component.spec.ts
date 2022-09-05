import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMatchCardComponent } from './next-match-card.component';

describe('NextMatchCardComponent', () => {
  let component: NextMatchCardComponent;
  let fixture: ComponentFixture<NextMatchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMatchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
