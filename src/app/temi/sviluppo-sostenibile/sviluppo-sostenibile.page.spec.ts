import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SviluppoSostenibilePage } from './sviluppo-sostenibile.page';

describe('SviluppoSostenibilePage', () => {
  let component: SviluppoSostenibilePage;
  let fixture: ComponentFixture<SviluppoSostenibilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SviluppoSostenibilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
