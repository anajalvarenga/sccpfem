import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTitlesComponent } from './row-titles.component';

describe('RowTitlesComponent', () => {
  let component: RowTitlesComponent;
  let fixture: ComponentFixture<RowTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowTitlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
