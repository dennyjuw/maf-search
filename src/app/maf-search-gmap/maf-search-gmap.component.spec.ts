import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MafSearchGmapComponent } from './maf-search-gmap.component';

describe('MafSearchGmapComponent', () => {
  let component: MafSearchGmapComponent;
  let fixture: ComponentFixture<MafSearchGmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MafSearchGmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MafSearchGmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
