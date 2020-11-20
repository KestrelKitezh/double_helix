import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  private _eventRunning = new Subject<boolean>();
  isEventRunning = this._eventRunning.asObservable();

  private _pickDateToggle = new Subject<boolean>();
  isPickDateToggled = this._pickDateToggle.asObservable();

  setEventRunning(isEventRunning: boolean): void {
    this._eventRunning.next(isEventRunning);
    console.log(isEventRunning);
  }

  setTogglePickDate(isPickDateToggled: boolean): void {
    this._pickDateToggle.next(isPickDateToggled);
    console.log(isPickDateToggled);
  }
  
}
