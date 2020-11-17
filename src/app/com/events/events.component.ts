import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  formGroup: FormGroup;
  eventname: string = "eventname";
  eventcountdown: string = "12.12.12.12";

  constructor(formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      fixedDateSlide: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {}
}
