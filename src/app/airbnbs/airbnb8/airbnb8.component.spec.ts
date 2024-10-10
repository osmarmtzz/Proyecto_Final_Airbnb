import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb8Component } from './airbnb8.component';

describe('Airbnb8Component', () => {
  let component: Airbnb8Component;
  let fixture: ComponentFixture<Airbnb8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
