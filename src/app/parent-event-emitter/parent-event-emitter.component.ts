import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-event-emitter',
  templateUrl: './parent-event-emitter.component.html',
  styleUrls: ['./parent-event-emitter.component.css']
})
export class ParentEventEmitterComponent {
  ClickCounter! : number
  countChangedHandler(count :number) {
    this.ClickCounter = count;
    console.log(count);
  }
}
