import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayParentComponent } from './data-display-parent.component';

describe('DataDisplayParentComponent', () => {
  let component: DataDisplayParentComponent;
  let fixture: ComponentFixture<DataDisplayParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDisplayParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDisplayParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
