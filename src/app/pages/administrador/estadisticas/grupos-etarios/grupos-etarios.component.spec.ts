import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposEtariosComponent } from './grupos-etarios.component';

describe('GruposEtariosComponent', () => {
  let component: GruposEtariosComponent;
  let fixture: ComponentFixture<GruposEtariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GruposEtariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GruposEtariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
