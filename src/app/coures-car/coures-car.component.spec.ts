import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouresCarComponent } from './coures-car.component';

describe('CouresCarComponent', () => {
  let component: CouresCarComponent;
  let fixture: ComponentFixture<CouresCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouresCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouresCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
