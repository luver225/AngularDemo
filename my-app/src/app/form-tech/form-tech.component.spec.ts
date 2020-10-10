import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTechComponent } from './form-tech.component';

describe('FormTechComponent', () => {
  let component: FormTechComponent;
  let fixture: ComponentFixture<FormTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
