import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MafSearchToolbarComponent } from './maf-search-toolbar.component';

describe('MafSearchToolbarComponent', () => {
  let component: MafSearchToolbarComponent;
  let fixture: ComponentFixture<MafSearchToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MafSearchToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MafSearchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
