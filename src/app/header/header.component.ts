import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { print } from 'util';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private r: Router ) { }

  ngOnInit() {
  }
  aboutUs() {
    this.r.navigate(['/About-Us']);
  }
  destinos() {
    this.r.navigate(['/Destinies']);
  }
  hoteles() {
    this.r.navigate(['/Hotels']);
  }
  contactos() {
    this.r.navigate(['/Contacts']);
  }
}
