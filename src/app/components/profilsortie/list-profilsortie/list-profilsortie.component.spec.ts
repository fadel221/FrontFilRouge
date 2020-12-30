import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfilsortieComponent } from './list-profilsortie.component';

describe('ListProfilsortieComponent', () => {
  let component: ListProfilsortieComponent;
  let fixture: ComponentFixture<ListProfilsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfilsortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfilsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
