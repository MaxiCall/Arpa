import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MappaSemiPage } from './mappa-semi.page';

describe('MappaSemiPage', () => {
  let component: MappaSemiPage;
  let fixture: ComponentFixture<MappaSemiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MappaSemiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
