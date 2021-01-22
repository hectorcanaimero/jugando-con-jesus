import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AddAlumnosComponent } from './grupos/add-alumnos/add-alumnos.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onAdd = async () => {
    const modal = await this.modalController.create({
      component: AddAlumnosComponent
    });
    modal.present();
  }

}
