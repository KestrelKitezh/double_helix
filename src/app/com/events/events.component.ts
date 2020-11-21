import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import * as moment from 'moment';

import { EventsService } from '../../services/events.service';

export interface EventData {
  created: Date;
  id: number;
  eventName: string;
  eventCountdown: string;
  eventDays: number;
  eventHours: number;
  eventMinutes: number;
  eventSeconds: number;
  eventDate: Date;
  eventAlarm: boolean;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  isEventRunning: Observable<boolean>;
  isPickDateToggled: Observable<boolean>;
  isChecked = true;
  formGroup: FormGroup;



  constructor(
    formBuilder: FormBuilder,
    private eventsService: EventsService,
  ) {
    let now = moment();
    console.log('debug crap', now.format());
    console.log(now.add(7, 'days').format());
    this.formGroup = formBuilder.group({
      fixedDateSlide: 'true',
      pickDateButton: '',

    });
  }

  ngOnInit(): void {
    console.log("[Debug]: Toggle: " + this.isPickDateToggled);
    console.log("[Debug]: Event running: " + this.isEventRunning);
    // this actually works
    if(this.isPickDateToggled == undefined) {this.togglePickDate(true)}
    console.log("[Debug]: Toggle: " + this.isPickDateToggled);
    this.isEventRunning = this.eventsService.isEventRunning;
    this.isPickDateToggled = this.eventsService.isPickDateToggled;
  }

  togglePickDate(checked: boolean) {
    this.eventsService.setTogglePickDate(checked);
  }

  toggleEventRunning(checked: boolean) {
    this.eventsService.setEventRunning(checked);
  }

  onFormSubmit() { }
}
