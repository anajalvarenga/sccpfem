import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesSectionComponent } from './titles-section.component';

describe('TitlesSectionComponent', () => {
  let component: TitlesSectionComponent;
  let fixture: ComponentFixture<TitlesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
