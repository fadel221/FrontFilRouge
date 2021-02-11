import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfilsortiesComponent } from './liste-profilsorties.component';

describe('ListeProfilsortiesComponent', () => {
  let component: ListeProfilsortiesComponent;
  let fixture: ComponentFixture<ListeProfilsortiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProfilsortiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProfilsortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
