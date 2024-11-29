import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionLayoutComponent } from './administracion-layout.component';

describe('AdministracionLayoutComponent', () => {
  let component: AdministracionLayoutComponent;
  let fixture: ComponentFixture<AdministracionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
