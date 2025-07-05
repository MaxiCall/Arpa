import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaSemiPage } from './lista-semi.page';

describe('ListaSemiPage', () => {
  let component: ListaSemiPage;
  let fixture: ComponentFixture<ListaSemiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSemiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
