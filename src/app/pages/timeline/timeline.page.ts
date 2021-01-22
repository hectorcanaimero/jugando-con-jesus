import { AddTimelineComponent } from './add-timeline/add-timeline.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ObjectIonicService } from 'src/app/shared/services/object-ionic.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onAdd = async () => {
    const modal = await this.modalController.create({
      component: AddTimelineComponent
    });
    modal.present();
  }

}
