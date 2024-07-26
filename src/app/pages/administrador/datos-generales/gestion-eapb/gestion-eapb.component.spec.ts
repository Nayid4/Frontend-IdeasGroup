import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEAPBComponent } from './gestion-eapb.component';

describe('GestionEAPBComponent', () => {
  let component: GestionEAPBComponent;
  let fixture: ComponentFixture<GestionEAPBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEAPBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionEAPBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
