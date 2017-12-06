import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataSymbolListComponent } from './ref-data-symbol-list.component';

describe('RefDataSymbolListComponent', () => {
  let component: RefDataSymbolListComponent;
  let fixture: ComponentFixture<RefDataSymbolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDataSymbolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDataSymbolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
