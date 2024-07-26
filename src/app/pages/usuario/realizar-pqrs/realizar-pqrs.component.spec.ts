import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarPQRSComponent } from './realizar-pqrs.component';

describe('RealizarPQRSComponent', () => {
  let component: RealizarPQRSComponent;
  let fixture: ComponentFixture<RealizarPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizarPQRSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealizarPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
