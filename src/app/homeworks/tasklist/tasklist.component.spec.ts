import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasklistComponent } from './tasklist.component';
import { HomeworksService } from '../services/homework.service';

describe('TasklistComponent', () => {
  let component: TasklistComponent;
  let fixture: ComponentFixture<TasklistComponent>;
  let service: HomeworksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasklistComponent],
      providers: [HomeworksService],
    }).compileComponents();

    service = TestBed.inject(HomeworksService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia renderizar los 5 lementos en la lista dinamicamente', () => {
    fixture.detectChanges();

    const tasks = fixture.debugElement.nativeElement;

    expect(tasks.querySelector('#task-00')).toBeTruthy();
  });
});
