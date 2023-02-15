import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEventEmitterComponent } from './parent-event-emitter.component';

describe('ParentEventEmitterComponent', () => {
  let component: ParentEventEmitterComponent;
  let fixture: ComponentFixture<ParentEventEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentEventEmitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
