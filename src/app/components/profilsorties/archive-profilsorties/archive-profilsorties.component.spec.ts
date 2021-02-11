import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProfilsortiesComponent } from './archive-profilsorties.component';

describe('ArchiveProfilsortiesComponent', () => {
  let component: ArchiveProfilsortiesComponent;
  let fixture: ComponentFixture<ArchiveProfilsortiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveProfilsortiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProfilsortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
