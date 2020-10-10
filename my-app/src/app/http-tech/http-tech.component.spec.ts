import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTechComponent } from './http-tech.component';

describe('HttpTechComponent', () => {
  let component: HttpTechComponent;
  let fixture: ComponentFixture<HttpTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
