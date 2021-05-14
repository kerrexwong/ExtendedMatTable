import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMatTableComponent } from './extended-mat-table.component';

describe('ExtendedMatTableComponent', () => {
  let component: ExtendedMatTableComponent;
  let fixture: ComponentFixture<ExtendedMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
