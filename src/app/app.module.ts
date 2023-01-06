import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeworksModule } from './homeworks/homeworks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeworksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
