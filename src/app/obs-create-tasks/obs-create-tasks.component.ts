import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl  } from '@angular/forms';
import { TaskService } from '../shared/task.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-obs-create-tasks',
  templateUrl: './obs-create-tasks.component.html',
  styleUrls: ['./obs-create-tasks.component.sass']
})
export class ObsCreateTasksComponent implements OnInit {

  constructor(
    protected taskService: TaskService,
    protected http: HttpClient,
    private modalService: NgbModal,
    private appComponent: AppComponent,
    public activeModal: NgbActiveModal,
  ){  }

  createTask = new FormGroup({
     description: new FormControl(''),
     completed: new FormControl(''),
   });
  ngOnInit(): void {
  }

  addTask(){
    this.modalService.dismissAll();
    if( this.createTask.value.completed === "" || this.createTask.value.completed === " " || this.createTask.value.completed === "false"){
       this.createTask.value.completed = false
    }else{
       this.createTask.value.completed = true
    }
    this.taskService
    .addNewTask(this.createTask.value.description, this.createTask.value.completed)
    .subscribe(res =>{
      console.log(res);
      const modalTitleContent = `${res.description} CREATED SUCCESSFULLY!!`;
      const modalMsgContent = `
        <ul>
          <li><strong>ID: </strong> ${res._id}</li>
          <li><strong>Description: </strong> ${res.description}</li>
          <li><strong>Owner: </strong> ${res.owner}</li>
          <li><strong>Created: </strong> ${res.createdAt}</li>
        </ul>
      `;
      this.appComponent.openModal(modalTitleContent, modalMsgContent);
      setTimeout(function(){
        window.location.reload();
      }, 2000)

    },
    err => {
      console.log(err);
    });
  }

}
