import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCompetenceComponent } from './archive-competence.component';

describe('ArchiveCompetenceComponent', () => {
  let component: ArchiveCompetenceComponent;
  let fixture: ComponentFixture<ArchiveCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
