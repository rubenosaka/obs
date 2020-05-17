import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../task.service';
import { AppComponent } from '../app.component';
import { ObsEditTasksComponent } from '../obs-edit-tasks/obs-edit-tasks.component';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-obs-all-tasks',
  templateUrl: './obs-all-tasks.component.html',
  styleUrls: ['./obs-all-tasks.component.sass']
})


export class ObsAllTasksComponent implements OnInit {
  tasks = {}
  showItem  = [];

  constructor( protected taskService: TaskService, protected http: HttpClient, private appComponent: AppComponent, private modalService: NgbModal, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private obsEditTasksComponent:ObsEditTasksComponent) {  }

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

    editTask(id, description, completed, i){
      this.obsEditTasksComponent.editTask(id, description, completed, i);
    }


    deleteTask(id, i): void {

      this.taskService
      .removeTask(id, i)
      .subscribe(res =>{
        console.log(res);
        const modalTitleContent = `TASK DELETED`;
        const modalMsgContent = `
          <ul>
            <li><strong>ID: </strong> ${res._id}</li>
            <li><strong>Description: </strong> ${res.description}</li>
            <li><strong>Owner: </strong> ${res.owner}</li>
            <li><strong>Created: </strong> ${res.createdAt}</li>
          </ul>
        `;
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
