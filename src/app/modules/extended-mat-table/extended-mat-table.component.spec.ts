import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMatTable } from './extended-mat-table.component';

describe('ExtendedMatTable', () => {
  let component: ExtendedMatTable;
  let fixture: ComponentFixture<ExtendedMatTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedMatTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedMatTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
