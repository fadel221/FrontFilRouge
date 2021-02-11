import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveGrpecompetenceComponent } from './archive-grpecompetence.component';

describe('ArchiveGrpecompetenceComponent', () => {
  let component: ArchiveGrpecompetenceComponent;
  let fixture: ComponentFixture<ArchiveGrpecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveGrpecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveGrpecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
