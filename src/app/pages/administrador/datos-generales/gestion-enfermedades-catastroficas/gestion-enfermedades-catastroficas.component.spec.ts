import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEnfermedadesCatastroficasComponent } from './gestion-enfermedades-catastroficas.component';

describe('GestionEnfermedadesCatastroficasComponent', () => {
  let component: GestionEnfermedadesCatastroficasComponent;
  let fixture: ComponentFixture<GestionEnfermedadesCatastroficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEnfermedadesCatastroficasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionEnfermedadesCatastroficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
