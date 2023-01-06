import { Component, OnInit } from '@angular/core';
import { HomeworksService } from '../services/homework.service';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css'],
})
export class SubtitleComponent {
  constructor(private homeworksService: HomeworksService) {}

  get tasks() {
    return this.homeworksService.props.tasks.length;
  }

  ngOnInit(): void {}
}
