import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-obs-modals',
  templateUrl: './obs-modals.component.html',
})
export class ObsModalsComponent implements OnInit {

  @Input() modalTitle;
  @Input() modalMsg;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

}
