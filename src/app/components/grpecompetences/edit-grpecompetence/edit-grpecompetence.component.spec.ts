import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrpecompetenceComponent } from './edit-grpecompetence.component';

describe('EditGrpecompetenceComponent', () => {
  let component: EditGrpecompetenceComponent;
  let fixture: ComponentFixture<EditGrpecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrpecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrpecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
