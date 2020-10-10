import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDirectiveTechComponent } from './pipe-directive-tech.component';

describe('PipeDirectiveTechComponent', () => {
  let component: PipeDirectiveTechComponent;
  let fixture: ComponentFixture<PipeDirectiveTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDirectiveTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDirectiveTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
