import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TajertaOpcionComponent } from './tajerta-opcion.component';

describe('TajertaOpcionComponent', () => {
  let component: TajertaOpcionComponent;
  let fixture: ComponentFixture<TajertaOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TajertaOpcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TajertaOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
