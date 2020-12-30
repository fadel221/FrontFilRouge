import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilsortieComponent } from './edit-profilsortie.component';

describe('EditProfilsortieComponent', () => {
  let component: EditProfilsortieComponent;
  let fixture: ComponentFixture<EditProfilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
