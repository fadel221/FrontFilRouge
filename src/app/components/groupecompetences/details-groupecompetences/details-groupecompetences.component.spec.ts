import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGroupecompetencesComponent } from './details-groupecompetences.component';

describe('DetailsGroupecompetencesComponent', () => {
  let component: DetailsGroupecompetencesComponent;
  let fixture: ComponentFixture<DetailsGroupecompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGroupecompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGroupecompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
