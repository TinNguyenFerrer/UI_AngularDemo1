import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillEventEmitterComponent } from './chill-event-emitter.component';

describe('ChillEventEmitterComponent', () => {
  let component: ChillEventEmitterComponent;
  let fixture: ComponentFixture<ChillEventEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChillEventEmitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
