import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb7Component } from './airbnb7.component';

describe('Airbnb7Component', () => {
  let component: Airbnb7Component;
  let fixture: ComponentFixture<Airbnb7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
