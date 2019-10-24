import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss']
})
export class DestinosComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  destinos=[
    {
      name: "Pico 1",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado",
      photos: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
      location: "mountain",
      popularity:1,
    },
    {
      name: "Pico 2",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 2",
      photos: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
      location: "mountain",
      popularity:3,
    },
    {
      name: "Playa 2",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 2",
      photos: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
      location: "beach",
      popularity:3,
    },
    {
      name: "Playa 4",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 1",
      photos: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
      location: "beach",
      popularity: 3,
    },
    {
      name: "Pico 3",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 1",
      photos: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
      location: "mountain",
      popularity: 3,
    },
    {
      name: "Playa 6",
      description: "jasjasjsjajsajsajsjsajsa",
      state: "estado 2",
      photos: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
      location: "beach",
      popularity: 3,
    },
  ]
  
  ngOnInit() {
   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
