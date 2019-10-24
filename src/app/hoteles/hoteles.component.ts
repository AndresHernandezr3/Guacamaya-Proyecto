import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
  hoteles=[
    {
      name: "Hotel 1",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 1",
      photos: "http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
      location: "mountain",
      popularity:1,
      price: 500,
    },
    {
      name: "Hotel 2",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 2",
      photos: "http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
      location: "mountain",
      popularity: 5,
      price: 500,
    },
    {
      name: "Hotel 3",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 2",
      photos: "http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
      location: "beach",
      popularity:3,
      price: 500,
    },
    {
      name: "Hotel 4",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 1",
      photos: "http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
      location: "beach",
      popularity: 3,
      price: 500,
    },
    {
      name: "Hotel 5",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 1",
      photos: "http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
      location: "mountain",
      popularity: 3,
      price: 400,
    },
    {
      name: "Hotel 6",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 2",
      photos: "http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3",
      location: "beach",
      popularity: 3,
      price: 256,
    },
  ]
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
