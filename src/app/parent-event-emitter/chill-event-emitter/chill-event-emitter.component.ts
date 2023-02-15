import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chill-event-emitter',
  templateUrl: './chill-event-emitter.component.html',
  styleUrls: ['./chill-event-emitter.component.css']
})
export class ChillEventEmitterComponent {
  @Input() count: number = 0;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
