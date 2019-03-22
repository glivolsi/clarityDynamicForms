import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ButtonService {
  private _buttonClick = new Subject<any>();
  buttonClick$ = this._buttonClick.asObservable();

  buttonClick(button: string) {
    this._buttonClick.next(button);
  }
}
