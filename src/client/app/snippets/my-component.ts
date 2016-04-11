import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `<button (click)="raiseEvent()">Damage!</button>`,
})
export class MyComponent {
  @Output() onRaisedEvent:EventEmitter<string> = new EventEmitter();

  raiseEvent() {
    this.onRaisedEvent.emit(this.id);
  }
}