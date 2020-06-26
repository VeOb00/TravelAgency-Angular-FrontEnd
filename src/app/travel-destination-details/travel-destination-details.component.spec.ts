import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDestinationDetailsComponent } from './travel-destination-details.component';

describe('TravelDestinationDetailsComponent', () => {
  let component: TravelDestinationDetailsComponent;
  let fixture: ComponentFixture<TravelDestinationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDestinationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDestinationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
