import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MafSearchFilterComponent } from './maf-search-filter.component';

describe('MafSearchFilterComponent', () => {
  let component: MafSearchFilterComponent;
  let fixture: ComponentFixture<MafSearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MafSearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MafSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
