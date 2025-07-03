import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiodiversitaPage } from './biodiversita.page';

describe('BiodiversitaPage', () => {
  let component: BiodiversitaPage;
  let fixture: ComponentFixture<BiodiversitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodiversitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
