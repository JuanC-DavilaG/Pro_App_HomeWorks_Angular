import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { GridComponent } from './grid/grid.component';
import { HomeworksService } from './services/homework.service';

@NgModule({
  declarations: [SubtitleComponent, TasklistComponent, GridComponent],
  imports: [CommonModule],
  exports: [GridComponent],
  providers: [HomeworksService],
})
export class HomeworksModule {}
