import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsletterPage } from './newsletter.page';

describe('NewsletterPage', () => {
  let component: NewsletterPage;
  let fixture: ComponentFixture<NewsletterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
