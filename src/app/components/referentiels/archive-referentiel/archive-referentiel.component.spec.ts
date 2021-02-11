import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveReferentielComponent } from './archive-referentiel.component';

describe('ArchiveReferentielComponent', () => {
  let component: ArchiveReferentielComponent;
  let fixture: ComponentFixture<ArchiveReferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveReferentielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveReferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
