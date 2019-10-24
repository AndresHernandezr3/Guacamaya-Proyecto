import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DestinosComponent } from './destinos/destinos.component';
import { HotelesComponent } from './hoteles/hoteles.component';

const routes: Routes = [
  {
    path:'About-Us',
    component: AboutUsComponent
  },
  {
    path:'Destinies',
    component: DestinosComponent
  },
  {
    path:'Hotels',
    component: HotelesComponent
  },
  {
    path:'Contacts',
    component: HotelesComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
