import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpecompetenceComponent } from './list-grpecompetence.component';

describe('ListGrpecompetenceComponent', () => {
  let component: ListGrpecompetenceComponent;
  let fixture: ComponentFixture<ListGrpecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
