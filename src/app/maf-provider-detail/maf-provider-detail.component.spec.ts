import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MafProviderDetailComponent } from './maf-provider-detail.component';

describe('MafProviderDetailComponent', () => {
  let component: MafProviderDetailComponent;
  let fixture: ComponentFixture<MafProviderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MafProviderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MafProviderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
