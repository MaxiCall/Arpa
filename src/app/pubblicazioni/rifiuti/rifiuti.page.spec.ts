import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RifiutiPage } from './rifiuti.page';

describe('RifiutiPage', () => {
  let component: RifiutiPage;
  let fixture: ComponentFixture<RifiutiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RifiutiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
