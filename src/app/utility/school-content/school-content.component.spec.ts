import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolContentComponent } from './school-content.component';

describe('SchoolContentComponent', () => {
  let component: SchoolContentComponent;
  let fixture: ComponentFixture<SchoolContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
