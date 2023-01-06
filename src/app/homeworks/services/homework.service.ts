// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { typeTask } from '../interfaces/tasks.interfaces';

@Injectable()
export class HomeworksService {
  //   detallis = ['barrer', 'trapear', 'cocinar', 'leer', 'lavar'];
  //   props: { tasks: Array<any>; detallis: string[] } = {
  //     tasks: [],
  //     detallis: [],
  //   };
  // constructor(private homeworkService: homeworkService){

  // }
  //   OnInit(): void {
  //     this.props.tasks = [
  //       { id: 'id-00', name: 'sweep' },
  //       { id: 'id-01', name: 'mop' },
  //       { id: 'id-02', name: 'cook' },
  //       { id: 'id-03', name: 'read' },
  //       { id: 'id-04', name: 'to wash' },
  //     ];
  //     this.props.detallis = ['barrer', 'trapear', 'cocinar', 'leer', 'lavar'];
  //   }
  props: { tasks: Array<typeTask>; translation: string[] } = {
    tasks: [
      { id: 'id-00', name: 'sweep', complete: false },
      { id: 'id-01', name: 'mop', complete: false },
      { id: 'id-02', name: 'cook', complete: false },
      { id: 'id-03', name: 'read', complete: false },
      { id: 'id-04', name: 'to wash', complete: false },
    ],
    translation: ['barrer', 'trapear', 'cocinar', 'leer', 'lavar'],
  };

  deleteTask(nameTask: string, nameTran: string) {
    // this.props.tasks.pop();
    this.props.tasks = this.props.tasks.filter(
      (task) => task.name !== nameTask
    );
    this.props.translation = this.props.translation.filter(
      (inde) => inde !== nameTran
    );
  }

  completeTask(nameTask: string) {
    const task: typeTask = this.props.tasks.find((task) => {
      return task.name === nameTask;
    })!;

    task.complete = !task.complete;

    // console.log(task);
  }
}
