import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseManagementPageComponent } from './expense-management-page.component';

describe('ExpenseManagementPageComponent', () => {
  let component: ExpenseManagementPageComponent;
  let fixture: ComponentFixture<ExpenseManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseManagementPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
