import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTechComponent } from './communication-tech.component';

describe('CommunicationTechComponent', () => {
  let component: CommunicationTechComponent;
  let fixture: ComponentFixture<CommunicationTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
