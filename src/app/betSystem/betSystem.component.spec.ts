import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSystemComponent } from './betSystem.component';

describe('BetSystemComponent', () => {
  let component: BetSystemComponent;
  let fixture: ComponentFixture<BetSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
