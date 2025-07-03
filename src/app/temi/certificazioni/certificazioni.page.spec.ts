import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificazioniPage } from './certificazioni.page';

describe('CertificazioniPage', () => {
  let component: CertificazioniPage;
  let fixture: ComponentFixture<CertificazioniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificazioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
