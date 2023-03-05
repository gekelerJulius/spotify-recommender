import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InputService {
  constructor() {
    window.addEventListener("keydown", this.keydownHandler);
    window.addEventListener("keyup", this.keyupHandler);
    window.addEventListener("contextmenu", this.contextMenuHandler);
    window.addEventListener("click", this.clickHandler);
  }

  click$ = new Subject<MouseEvent>();
  context$ = new Subject<MouseEvent>();
  saved$ = new Subject<KeyboardEvent>();
  confirmed$ = new Subject<KeyboardEvent>();
  cancelled$ = new Subject<KeyboardEvent>();
  deleted$ = new Subject<KeyboardEvent>();
  pressedKeys$ = new BehaviorSubject<number[]>([]);
  other$ = new Subject<KeyboardEvent>();
  selectAll$ = new Subject<KeyboardEvent>();
  multiSelectActive$ = new Subject<boolean>();

  confirmationKeys: string[] = ["Enter", "NumpadEnter"];
  cancelKeys: string[] = ["Escape"];
  deleteKeys: string[] = ["Delete", "Backspace"];
  selectAllKeys: string[] = ["a"];
  private keydownHandler = (event: KeyboardEvent) => {
    this.pressedKeys$.next([...this.pressedKeys$.value, event.keyCode]);

    if (event.ctrlKey) {
      this.multiSelectActive$.next(true);
      if (this.selectAllKeys.includes(event.key)) {
        this.selectAll$.next(event);
      }
    }

    if (this.confirmationKeys.includes(event.key)) {
      this.confirmed$.next(event);
    } else if (this.cancelKeys.includes(event.key)) {
      this.cancelled$.next(event);
    } else if (this.deleteKeys.includes(event.key)) {
      this.deleted$.next(event);
    } else {
      this.other$.next(event);
    }
    if (event.ctrlKey) {
      this.saved$.next(event);
    }
  };
  private keyupHandler = (event: KeyboardEvent) => {
    this.pressedKeys$.next(
      this.pressedKeys$.value.filter((keyCode) => keyCode !== event.keyCode)
    );

    if (!event.ctrlKey) {
      this.multiSelectActive$.next(false);
    }
  };

  private contextMenuHandler = (event: MouseEvent) => {
    this.context$.next(event);
  };

  private clickHandler = (event: MouseEvent) => {
    this.click$.next(event);
  };
}
