import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../task.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-obs-all-tasks',
  templateUrl: './obs-all-tasks.component.html',
  styleUrls: ['./obs-all-tasks.component.sass']
})
export class ObsAllTasksComponent implements OnInit {
  tasks = {}
  showItem  = [];
  constructor( protected taskService: TaskService, protected http: HttpClient, private appComponent: AppComponent) {  }

  ngOnInit() {
      this.taskService.getTasks()
      .subscribe(
        (data) => { // Success
            this.tasks = data;
          },
        (error) => {
          console.error(error);
        }
      );
    }

    deleteTask(id, i): void {

      this.taskService
      .removeTask(id, i)
      .subscribe(res =>{
        console.log(res);
        const modalTitleContent = `TASK DELETED`;
        const modalMsgContent = `Task with id ${res._id} has been removed`;
        this.appComponent.openModal(modalTitleContent, modalMsgContent);
        this.showItem.push(i);
      },
      err => {
        const index = this.showItem.indexOf(5);
        if (index > -1) {
          this.showItem.splice(index, 1);
        }
        console.log(err);
      });
     }



}
