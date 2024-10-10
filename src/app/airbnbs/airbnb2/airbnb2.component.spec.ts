import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb2Component } from './airbnb2.component';

describe('Airbnb2Component', () => {
  let component: Airbnb2Component;
  let fixture: ComponentFixture<Airbnb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Airbnb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
