import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProfilsortieComponent } from './archive-profilsortie.component';

describe('ArchiveProfilsortieComponent', () => {
  let component: ArchiveProfilsortieComponent;
  let fixture: ComponentFixture<ArchiveProfilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveProfilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProfilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
