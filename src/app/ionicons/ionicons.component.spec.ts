import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoniconsComponent } from './ionicons.component';

describe('IoniconsComponent', () => {
  let component: IoniconsComponent;
  let fixture: ComponentFixture<IoniconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoniconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoniconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
