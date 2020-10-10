import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlightComponent } from './blight.component';

describe('BlightComponent', () => {
  let component: BlightComponent;
  let fixture: ComponentFixture<BlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
