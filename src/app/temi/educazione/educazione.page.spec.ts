import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducazionePage } from './educazione.page';

describe('EducazionePage', () => {
  let component: EducazionePage;
  let fixture: ComponentFixture<EducazionePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EducazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
