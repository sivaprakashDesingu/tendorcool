import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplylistComponent } from './applylist.component';

describe('ApplylistComponent', () => {
  let component: ApplylistComponent;
  let fixture: ComponentFixture<ApplylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
