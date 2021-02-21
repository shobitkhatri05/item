import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptiComponent } from './opti.component';

describe('OptiComponent', () => {
  let component: OptiComponent;
  let fixture: ComponentFixture<OptiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
