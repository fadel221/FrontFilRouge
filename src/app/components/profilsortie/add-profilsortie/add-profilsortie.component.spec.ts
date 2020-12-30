import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilsortieComponent } from './add-profilsortie.component';

describe('AddProfilsortieComponent', () => {
  let component: AddProfilsortieComponent;
  let fixture: ComponentFixture<AddProfilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
