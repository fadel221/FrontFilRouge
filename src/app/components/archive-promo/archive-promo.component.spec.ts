import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePromoComponent } from './archive-promo.component';

describe('ArchivePromoComponent', () => {
  let component: ArchivePromoComponent;
  let fixture: ComponentFixture<ArchivePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivePromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
