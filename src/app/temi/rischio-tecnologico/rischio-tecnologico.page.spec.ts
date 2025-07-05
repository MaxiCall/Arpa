import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RischioTecnologicoPage } from './rischio-tecnologico.page';

describe('RischioTecnologicoPage', () => {
  let component: RischioTecnologicoPage;
  let fixture: ComponentFixture<RischioTecnologicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RischioTecnologicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
