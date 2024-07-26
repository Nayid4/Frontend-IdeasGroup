import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeTrimestralComponent } from './informe-trimestral.component';

describe('InformeTrimestralComponent', () => {
  let component: InformeTrimestralComponent;
  let fixture: ComponentFixture<InformeTrimestralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeTrimestralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformeTrimestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
