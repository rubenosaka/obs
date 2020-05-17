import { Component, Injectable } from '@angular/core';
import { ObsModalsComponent } from './obs-modals/obs-modals.component';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@Injectable()
export class AppComponent {
  title = 'OBS Angular App';

  constructor(private modalService: NgbModal) {}

  openModal(modalTitle, modalMsg) {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(ObsModalsComponent);
    modalRef.componentInstance.modalTitle = modalTitle;
    modalRef.componentInstance.modalMsg = modalMsg;
  }
}
