import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMasterComponent } from './search-master.component';

describe('SearchMasterComponent', () => {
  let component: SearchMasterComponent;
  let fixture: ComponentFixture<SearchMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
