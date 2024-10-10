import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb1Component } from './airbnb1.component';

describe('Airbnb1Component', () => {
  let component: Airbnb1Component;
  let fixture: ComponentFixture<Airbnb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
