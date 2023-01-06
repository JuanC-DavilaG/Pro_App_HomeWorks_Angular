import { Component } from '@angular/core';
import { typeTask } from '../interfaces/tasks.interfaces';
import { HomeworksService } from '../services/homework.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
// export class TasklistComponent implements OnInit {
export class TasklistComponent {
  // props: { tasks: Array<any>; detallis: string[] } = {
  //   tasks: [],
  //   detallis: [],
  // };

  constructor(private homeworksSevice: HomeworksService) {
    // console.log(homeworksSevice.props);
  }

  get homeworks() {
    return this.homeworksSevice.props;
  }

  delete(task: typeTask, tran: string) {
    this.homeworksSevice.deleteTask(task.name, tran);
    // console.log(tran);
  }

  complete(task: typeTask) {
    this.homeworksSevice.completeTask(task.name);
  }

  ngOnInit(): void {}

  // tasks: string[] = ['sweep', 'mop', 'cook', 'read'];
}
