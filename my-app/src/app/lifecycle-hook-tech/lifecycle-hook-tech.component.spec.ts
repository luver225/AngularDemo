import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHookTechComponent } from './lifecycle-hook-tech.component';

describe('LifecycleHookTechComponent', () => {
  let component: LifecycleHookTechComponent;
  let fixture: ComponentFixture<LifecycleHookTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleHookTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHookTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
