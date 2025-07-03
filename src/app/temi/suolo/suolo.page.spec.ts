import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuoloPage } from './suolo.page';

describe('SuoloPage', () => {
  let component: SuoloPage;
  let fixture: ComponentFixture<SuoloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
