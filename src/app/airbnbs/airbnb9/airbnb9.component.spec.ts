import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb9Component } from './airbnb9.component';

describe('Airbnb9Component', () => {
  let component: Airbnb9Component;
  let fixture: ComponentFixture<Airbnb9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
