import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObsCompletedTasksComponent } from './obs-completed-tasks/obs-completed-tasks.component';
import { ObsPendingTasksComponent } from './obs-pending-tasks/obs-pending-tasks.component';
import { ObsEditTasksComponent } from './obs-edit-tasks/obs-edit-tasks.component';
import { ObsCreateTasksComponent } from './obs-create-tasks/obs-create-tasks.component';
import { ObsAllTasksComponent } from './obs-all-tasks/obs-all-tasks.component';
import { ObsTasksComponent } from './obs-tasks/obs-tasks.component';
import { ObsModalsComponent } from './obs-modals/obs-modals.component';
import { TaskService } from './task.service';
import { NgbModule, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ObsCompletedTasksComponent,
    ObsPendingTasksComponent,
    ObsEditTasksComponent,
    ObsCreateTasksComponent,
    ObsAllTasksComponent,
    ObsTasksComponent,
    ObsModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TaskService,
    NgbActiveModal 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
