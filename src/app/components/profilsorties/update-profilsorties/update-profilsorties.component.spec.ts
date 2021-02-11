import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilsortiesComponent } from './update-profilsorties.component';

describe('UpdateProfilsortiesComponent', () => {
  let component: UpdateProfilsortiesComponent;
  let fixture: ComponentFixture<UpdateProfilsortiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfilsortiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilsortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
