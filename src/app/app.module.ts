import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObsEditTasksComponent } from './obs-edit-tasks/obs-edit-tasks.component';
import { ObsCreateTasksComponent } from './obs-create-tasks/obs-create-tasks.component';
import { ObsAllTasksComponent } from './obs-all-tasks/obs-all-tasks.component';
import { ObsModalsComponent } from './obs-modals/obs-modals.component';
import { TaskService } from './shared/task.service';
import { NgbModule, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ObsEditTasksComponent,
    ObsCreateTasksComponent,
    ObsAllTasksComponent,
    ObsModalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppComponent,
    TaskService,
    NgbActiveModal,
    ObsEditTasksComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
