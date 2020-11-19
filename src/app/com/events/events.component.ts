import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  formGroup: FormGroup;
  isToggled: boolean;
  days=0
  constructor(formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      fixedDateSlide: 'true',
      pickDateButton: '',
      
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {}
}
