import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb3Component } from './airbnb3.component';

describe('Airbnb3Component', () => {
  let component: Airbnb3Component;
  let fixture: ComponentFixture<Airbnb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
