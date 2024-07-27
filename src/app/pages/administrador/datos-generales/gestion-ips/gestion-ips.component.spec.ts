import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionIPSComponent } from './gestion-ips.component';

describe('GestionIPSComponent', () => {
  let component: GestionIPSComponent;
  let fixture: ComponentFixture<GestionIPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionIPSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionIPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
