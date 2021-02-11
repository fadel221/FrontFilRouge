import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpecompetenceComponent } from './add-grpecompetence.component';

describe('AddGrpecompetenceComponent', () => {
  let component: AddGrpecompetenceComponent;
  let fixture: ComponentFixture<AddGrpecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
