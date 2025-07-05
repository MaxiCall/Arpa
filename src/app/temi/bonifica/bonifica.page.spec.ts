import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonificaPage } from './bonifica.page';

describe('BonificaPage', () => {
  let component: BonificaPage;
  let fixture: ComponentFixture<BonificaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BonificaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
