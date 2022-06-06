import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementPageComponent } from './event-management-page.component';

describe('EventManagementPageComponent', () => {
  let component: EventManagementPageComponent;
  let fixture: ComponentFixture<EventManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventManagementPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
