import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumSelectionComponent } from './numSelection.component';

describe('NumSelectionComponent', () => {
  let component: NumSelectionComponent;
  let fixture: ComponentFixture<NumSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
