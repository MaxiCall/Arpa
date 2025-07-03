import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampiElettromagneticiPage } from './campi-elettromagnetici.page';

describe('CampiElettromagneticiPage', () => {
  let component: CampiElettromagneticiPage;
  let fixture: ComponentFixture<CampiElettromagneticiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampiElettromagneticiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
