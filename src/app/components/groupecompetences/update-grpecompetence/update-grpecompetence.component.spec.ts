import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrpecompetenceComponent } from './update-grpecompetence.component';

describe('UpdateGrpecompetenceComponent', () => {
  let component: UpdateGrpecompetenceComponent;
  let fixture: ComponentFixture<UpdateGrpecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGrpecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGrpecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
