import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListComponentComponent } from './report-list-component.component';

describe('ReportListComponentComponent', () => {
  let component: ReportListComponentComponent;
  let fixture: ComponentFixture<ReportListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
