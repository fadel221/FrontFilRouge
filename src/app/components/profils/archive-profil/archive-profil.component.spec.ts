import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProfilComponent } from './archive-profil.component';

describe('ArchiveProfilComponent', () => {
  let component: ArchiveProfilComponent;
  let fixture: ComponentFixture<ArchiveProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
