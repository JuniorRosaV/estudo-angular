import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBadge } from './card-badge';

describe('CardBadge', () => {
  let component: CardBadge;
  let fixture: ComponentFixture<CardBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
