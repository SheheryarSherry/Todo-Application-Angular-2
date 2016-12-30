import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component.component';
import { TaskManagerComponentComponent } from './task-manager-component/task-manager-component.component';
import { TaskListComponent } from './task-manager-component/task-list/task-list.component';
import { TaskAddComponent } from './task-manager-component/task-add/task-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    TaskManagerComponentComponent,
    TaskListComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
