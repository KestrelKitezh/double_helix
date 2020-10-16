import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExileBuildingForkComponent } from './exile-building-fork.component';

describe('ExileBuildingForkComponent', () => {
  let component: ExileBuildingForkComponent;
  let fixture: ComponentFixture<ExileBuildingForkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExileBuildingForkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExileBuildingForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
