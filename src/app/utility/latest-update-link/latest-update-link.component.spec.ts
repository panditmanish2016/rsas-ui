import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestUpdateLinkComponent } from './latest-update-link.component';

describe('LatestUpdateLinkComponent', () => {
  let component: LatestUpdateLinkComponent;
  let fixture: ComponentFixture<LatestUpdateLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestUpdateLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestUpdateLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
