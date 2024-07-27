import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesLayoutComponent } from './informes-layout.component';

describe('InformesLayoutComponent', () => {
  let component: InformesLayoutComponent;
  let fixture: ComponentFixture<InformesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
