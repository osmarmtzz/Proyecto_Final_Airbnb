import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb5Component } from './airbnb5.component';

describe('Airbnb5Component', () => {
  let component: Airbnb5Component;
  let fixture: ComponentFixture<Airbnb5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
