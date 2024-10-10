import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb4Component } from './airbnb4.component';

describe('Airbnb4Component', () => {
  let component: Airbnb4Component;
  let fixture: ComponentFixture<Airbnb4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
