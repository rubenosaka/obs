import { Component,  Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AppComponent } from '../app.component';
import { TaskService } from '../task.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-obs-edit-tasks',
  templateUrl: './obs-edit-tasks.component.html',
  styleUrls: ['./obs-edit-tasks.component.sass']
})
@Injectable()
export class ObsEditTasksComponent {

  @Input()
  id: string;

  @Input()
  description: string;

  @Input()
  completed: string;

  @Input()
  modalTitle: string;

  @Input()
  modalMsg: string;

  @Input()
  itin: string;

  myForm: FormGroup;
  constructor(
    protected taskService: TaskService,
    protected http: HttpClient,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private appComponent: AppComponent
  ) {
    this.createForm();

  }

  public editTask(id, description, completed, i): void {

    const modalTitleContent = `Edit task: ${description}`;
    const modalMsgContent = `Your are about to edit task with ID; ${id}` ;
    const modalRef = this.modalService.open(ObsEditTasksComponent);
    modalRef.componentInstance.modalTitle = modalTitleContent;
    modalRef.componentInstance.modalMsg = modalMsgContent;
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.completed = completed;


  }



  public createForm() {
    this.myForm = this.formBuilder.group({
      id:this.id,
      description:this.description,
      completed: this.completed
    });
  }

  public updateTask() {
    this.activeModal.close();
    if( this.myForm.value.completed === "" || this.myForm.value.completed === " " || this.myForm.value.completed === "false"){
       this.myForm.value.completed = false
    }else{
       this.myForm.value.completed = true
    }
    this.taskService
    .updateTask(this.myForm.value.id, this.myForm.value.description, this.myForm.value.completed)
    .subscribe(res =>{
      console.log(res);
      const modalTitleContent = `${res.description} UPDATED SUCCESSFULLY!!`;
      const modalMsgContent = `
        <ul>
          <li><strong>ID: </strong> ${res._id}</li>
          <li><strong>Description: </strong> ${res.description}</li>
          <li><strong>Owner: </strong> ${res.owner}</li>
          <li><strong>Updated: </strong> ${res.updatedAt}</li>
        </ul>
      `;
      this.appComponent.openModal(modalTitleContent, modalMsgContent);

    },
    err => {
      console.log(err);
    });

  }

  ngOnInit() {
    this.myForm.setValue({id:this.id, description: this.description, completed: this.completed});
  }


}
