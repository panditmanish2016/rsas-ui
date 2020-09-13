import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStaffComponent } from './school-staff.component';

describe('SchoolStaffComponent', () => {
  let component: SchoolStaffComponent;
  let fixture: ComponentFixture<SchoolStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
