import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EapbConMayorPqrsComponent } from './eapb-con-mayor-pqrs.component';

describe('EapbConMayorPqrsComponent', () => {
  let component: EapbConMayorPqrsComponent;
  let fixture: ComponentFixture<EapbConMayorPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EapbConMayorPqrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EapbConMayorPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
