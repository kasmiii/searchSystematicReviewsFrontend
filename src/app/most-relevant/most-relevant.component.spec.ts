import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRelevantComponent } from './most-relevant.component';

describe('MostRelevantComponent', () => {
  let component: MostRelevantComponent;
  let fixture: ComponentFixture<MostRelevantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRelevantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRelevantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
