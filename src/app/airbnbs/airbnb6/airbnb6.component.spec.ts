import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb6Component } from './airbnb6.component';

describe('Airbnb6Component', () => {
  let component: Airbnb6Component;
  let fixture: ComponentFixture<Airbnb6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
